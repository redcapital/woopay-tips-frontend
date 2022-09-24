import { createAction } from "redux-actions";
import { UserSession } from "../types";

export const setSession = createAction(
  "SESSION.SET",
  (session: UserSession) => ({
    session,
  })
);

export const signup = createAction(
  "SESSION.SIGNUP",
  (params: { login: string; email: string }) => params
);

export const signupDone = createAction(
  "SESSION.SIGNUP_DONE",
  (params: { login: string }) => params
);

export const activate = createAction(
  "SESSION.ACTIVATE",
  (params: { login: string; password: string; activation_code: string }) =>
    params
);

export const activateDone = createAction(
  "SESSION.ACTIVATE_DONE",
  (params: { login: string; password: string }) => params
);

export const login = createAction(
  "SESSION.LOGIN",
  (params: { login: string; password: string }) => params
);
