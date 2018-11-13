import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import {reducer } from "../reducers";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
    logger
];
/* eslint-enable */

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
    ));

export default store;