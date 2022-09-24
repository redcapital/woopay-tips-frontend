import { all, fork } from "redux-saga/effects";
import sessionSaga from "./session";
import appSaga from "./app";
import donationSaga from "./donation";

export default function* rootSaga() {
  yield all([fork(sessionSaga), fork(appSaga), fork(donationSaga)]);
}
