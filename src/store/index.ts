import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { IState, reducer } from "../reducers";

const store = createStore<IState,any,any,any>(reducer, applyMiddleware(logger));
export default store;