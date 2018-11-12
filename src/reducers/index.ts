import {combineReducers} from 'redux';
import * as fromTodos from "./todos";

export interface IState {
  todos: fromTodos.IState;
}

export const initialState :IState = {
    todos:fromTodos.initialState
}

export const reducer = combineReducers<IState>({
    todos:fromTodos.reducer
})