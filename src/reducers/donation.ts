import { handleActions } from "redux-actions";
import {
  createDonationDone,
  initializePaymentOperation,
} from "../actions/donation";
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
    [`${initializePaymentOperation}`]: (
      state,
      action: ReturnType<typeof initializePaymentOperation>
    ) => ({
      ...state,
      frame_url: action.payload.frame_url,
    }),
  },
  {}
);

export default reducer;
