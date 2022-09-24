import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { AppState } from "./types";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

(window as any)["__INITIAL_STATE__"] = {
  session: {
    active: {
      country: 1,
      id: 21142011,
      login: "77051234567",
      email: "test@example.com",
      created_at: "2022-09-24T13:31:42+0000",
    },
  },
};

const store = configureStore<AppState>({
  reducer,
  middleware: [sagaMiddleware],
  preloadedState: window.hasOwnProperty("__INITIAL_STATE__")
    ? (window as any)["__INITIAL_STATE__"]
    : undefined,
});

sagaMiddleware.run(rootSaga);

export default store;
