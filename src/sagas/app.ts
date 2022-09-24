import { all, call, takeEvery } from "redux-saga/effects";
import { doDebug } from "../actions/app";
import { client } from "../xhr";

function* handleDebug(action: ReturnType<typeof doDebug>): any {
  try {
    const response = yield call(client.get, "/token");
    // const response = yield call(client.post, "/auth/pseudo", {
    //   login: "77051234567",
    // });
    console.log("resp is ", response);
  } catch (err) {
    alert("Ошибка на сервере");
  }
}

export default function* appSaga() {
  yield all([takeEvery(doDebug, handleDebug)]);
}
