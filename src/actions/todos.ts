import ITodo from "src/models/ITodo";
import { ISimpleDate } from "./../models/ISimpleDate";

export enum ActionTypes {
  ADD_TODO = "[Todos] Add Todo Item",
  TOGGLE_TODO = "[todos] Toggle Todo Item"
}

export interface IAddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: { todo: ITodo };
}

export interface IToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { todoId: number };
}

export const addTodo = (
  message: string,
  dueDate: ISimpleDate
): IAddTodoAction => ({
  payload: {
    todo: {
      completed: false,
      dueDate,
      message
    }
  },
  type: ActionTypes.ADD_TODO
});

export const toggleTodo = (todoId: number): IToggleTodoAction => ({
  payload: {
    todoId
  },
  type: ActionTypes.TOGGLE_TODO
});

export type Action = IAddTodoAction | IToggleTodoAction;
