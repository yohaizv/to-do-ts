import ITodo from "src/models/ITodo";
import { ISimpleDate } from './../models/ISimpleDate';

export enum ActionTypes {
  ADD_TODO = "[todos] ADD_TODO",
  TOGGLE_TODO = "[todos] TOGGLE_TODO"
}

export interface IAddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: { todo: ITodo };
}

export interface IToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { todoId: number };
}

export function addTodo(message: string, dueDate: ISimpleDate): IAddTodoAction {
  return {
    payload: {
      todo: {
        completed: false,
        dueDate,
        message
      }
    },
    type: ActionTypes.ADD_TODO
  };
}

export function toggleTodo(todoId: number): IToggleTodoAction {
  return {
    payload: {
      todoId
    },
    type: ActionTypes.TOGGLE_TODO
  };
}

export type Action = IAddTodoAction | IToggleTodoAction;