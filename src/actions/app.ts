import { createAction } from "redux-actions";

export const doDebug = createAction("APP.DEBUG", (params: any) => params);
