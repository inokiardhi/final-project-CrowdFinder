import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga/index";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(

  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(rootSaga);

export default store;
