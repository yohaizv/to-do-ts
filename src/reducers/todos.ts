import ITodo from "src/models/ITodo";
import { Action, ActionTypes } from "./../actions/todos";

export interface IState {
  todos: { [id: number]: ITodo };
}

export const initialState: IState = {
  todos: {}
};

export function reducer(state: IState = initialState, action: Action): IState {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const newId = getNextTodoId(state.todos);
      return {
        ...state,
        todos: {
          ...state.todos,
          [newId]: action.payload.todo
        }
      };
    }
    case ActionTypes.TOGGLE_TODO: {
      const { todoId } = action.payload;
      if (Object.keys(state.todos).indexOf(todoId.toString()) >= 0) {
        return {
          ...state,
          todos: {
            ...state.todos,
            [todoId]: {
              ...state.todos[todoId],
              completed: !state.todos[todoId].completed
            }
          }
        };
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
}

function getNextTodoId(todos: { [id: number]: ITodo }): number {
  if (Object.keys(todos).length === 0) {
    return 0;
  };
  let max = +Object.keys(todos).reduce((a, b) => (a > b ? a : b));
  return isNaN(max) ? 0 : ++max;
}
