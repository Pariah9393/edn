import { combineReducers } from "redux";
import todosReducer from "./tasks";

const rootReducer = () => combineReducers({
  todosReducer
});

export default rootReducer;
