import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  signup,
  signupDone,
  activate,
  activateDone,
  setSession,
  login,
} from "../actions/session";
import history from "../history";
import { client } from "../xhr";

function* handleSignup(action: ReturnType<typeof signup>): any {
  try {
    const response = yield call(
      client.post,
      "/registration/create-account",
      action.payload
    );
    if (response && response.status >= 200 && response.status < 300) {
      yield put(signupDone({ login: action.payload.login }));
    }
  } catch (err) {
    alert("Ошибка на сервере");
  }
}

function* handleActivate(action: ReturnType<typeof activate>): any {
  try {
    const response = yield call(
      client.post,
      "/registration/set-password",
      action.payload
    );
    if (response && response.status >= 200 && response.status < 300) {
      yield put(
        activateDone({
          login: action.payload.login,
          password: action.payload.password,
        })
      );
    }
  } catch (err) {
    alert("Ошибка на сервере");
  }
}

function* authenticate(params: { login: string; password: string }): any {
  try {
    const response = yield call(client.post, "/auth", params);
    if (response && response.status >= 200 && response.status < 300) {
      yield put(
        setSession({
          country: response.data.country,
          id: response.data.id,
          login: response.data.login,
          email: response.data.email,
          created_at: response.data.created_at,
          service_name: response.data.service_name,
        })
      );
      history.push("/");
    }
  } catch (err) {
    alert("Ошибка аутентификации");
  }
}

function* handleActivateDone(action: ReturnType<typeof activateDone>) {
  yield call(authenticate, action.payload);
}

function* handleLogin(action: ReturnType<typeof login>) {
  yield call(authenticate, action.payload);
}

export default function* sessionSaga() {
  yield all([
    takeEvery(signup, handleSignup),
    takeEvery(activate, handleActivate),
    takeEvery(activateDone, handleActivateDone),
    takeEvery(login, handleLogin),
  ]);
}
