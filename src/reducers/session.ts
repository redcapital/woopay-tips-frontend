import { handleActions } from "redux-actions";
import { setSession, signupDone, activateDone } from "../actions/session";
import { AppState } from "../types";

const reducer = handleActions<AppState["session"], any>(
  {
    [`${setSession}`]: (state, action: ReturnType<typeof setSession>) => ({
      ...state,
      active: action.payload.session,
      signup: undefined,
    }),
    [`${signupDone}`]: (state, action: ReturnType<typeof signupDone>) => ({
      ...state,
      signup: { login: action.payload.login, password: "" },
    }),
    [`${activateDone}`]: (state, action: ReturnType<typeof activateDone>) => ({
      ...state,
      signup: action.payload,
    }),
  },
  {
    active: {
      country: 0,
      id: 0,
      login: "",
      email: "",
      created_at: "",
    },
  }
);

export default reducer;
