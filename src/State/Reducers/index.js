import todoReducer from './todo-reducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    todoList:todoReducer
});
export default appReducer;