import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga/index";
import rootreducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;