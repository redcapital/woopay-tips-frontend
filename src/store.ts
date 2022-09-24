import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { AppState } from "./types";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore<AppState>({
  reducer,
  middleware: [sagaMiddleware],
  preloadedState: window.hasOwnProperty("__INITIAL_STATE__")
    ? (window as any)["__INITIAL_STATE__"]
    : undefined,
});

sagaMiddleware.run(rootSaga);

export default store;
