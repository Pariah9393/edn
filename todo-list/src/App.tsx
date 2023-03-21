import { Button, Col, Divider, Input, List, Row } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask, changeTask, deleteTask } from './redux/reducers/actionCreators';
import type { } from 'redux-thunk/extend-redux';

type Todo = {
  description: string;
  date: string,
  id: number
}

type IStore = {
  todosReducer: {
    todos: Array<Todo>,
    todo: string,
    id: number,
    editTodo: boolean
  }
}


const App: React.FC = () => {

  const state = useSelector((store: IStore) => store.todosReducer)
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  return (
    <div className="App">
      <Row>
        <Col span={9}>
          <Input value={task} placeholder="Ввод" onChange={(e) => setTask(e.target.value)}></Input>
          <Divider />
        </Col>
        <Button type="primary" onClick={() => {
          dispatch(addTask(task));
          setTask('');
        }}>
          {state.editTodo ? "Редактировать" : "Добавить"}
        </Button>
      </Row>
      <Row>
        <Col span={9}>
          <List
            size="small"
            bordered
            dataSource={state.todos}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<span>{item.date}</span>}
                  description={item.description}
                />
                <Button type="dashed" onClick={() => dispatch(changeTask(item.id))}>Редактировать</Button>
                <Button type="ghost" onClick={() => dispatch(deleteTask(item.id))}>Удалить</Button>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
