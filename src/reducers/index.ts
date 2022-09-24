import { combineReducers, Reducer } from "redux";
import { AppState } from "../types";
import donation from "./donation";
import session from "./session";

type ReducersMapObject = {
  [k in keyof AppState]: Reducer<any, any>;
};
const reducers: ReducersMapObject = { donation, session };

export default combineReducers<AppState, any>(reducers);
