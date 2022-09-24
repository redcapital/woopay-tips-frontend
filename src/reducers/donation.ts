import { handleActions } from "redux-actions";
import { createDonationDone } from "../actions/donation";
import { AppState } from "../types";

const reducer = handleActions<AppState["donation"], any>(
  {
    [`${createDonationDone}`]: (
      state,
      action: ReturnType<typeof createDonationDone>
    ) => ({
      ...state,
      created_service_name: action.payload.service_name,
    }),
  },
  {}
);

export default reducer;
