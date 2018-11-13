import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { IState, reducer } from "../reducers";

const persistConfig: PersistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () =>{
    const store = createStore<IState,any,any,any>(persistedReducer, applyMiddleware(logger));
    const persistor  = persistStore(store);
    return {store,persistor }
}
