import { createSelector } from "reselect";
import { IState } from "../reducers";

const getTodosState = (state: IState) => state.todos;

export const getTodos = createSelector([getTodosState], s => s.todos);
