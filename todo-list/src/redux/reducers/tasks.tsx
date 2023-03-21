import moment from "moment";
import { AnyAction } from "redux";
import { ADD, CHANGE, DELETE } from "../actions";

type IState = {
  todos: Array<Todo>,
  todo: string,
  id: number,
  editTodo: boolean
}

const initialState : IState = {
  todos: [],
  todo: '',
  id: 0,
  editTodo: false
}

type Todo = {
  description: string;
  date: string,
  id: number
}

const changeHandle = (state: IState, action: AnyAction) => {
  const filteredTodos = [...state.todos.filter((item) => item.id !== action.id)];
  const selectedTodo = state.todos.find(i => i.id === action.id);

  return {
    ...state,
    todos: filteredTodos,
    todo: selectedTodo?.description,
    id: action.id,
    editTodo: !state.editTodo
  }
}

const todosReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CHANGE: {
      return changeHandle(state, action)
    }
    case ADD: {
      return {
        ...state,
        editTodo: false,
        todo: "",
        id: 0,
        todos: [...state.todos, {
          description: action.description,
          date: moment().format('LL'),
          id: Math.floor(Math.random() * 10000),
        }]
      }
    }
    case DELETE: {
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.id)]
      }
    }
    default: return state
  }
}

export default todosReducer
