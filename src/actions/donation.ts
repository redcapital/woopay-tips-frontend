import { createAction } from "redux-actions";

export const createDonation = createAction(
  "DONATION.CREATE",
  (params: { name: string; description?: string }) => params
);

export const createDonationDone = createAction(
  "DONATION.CREATE_DONE",
  (service_name: string) => ({ service_name })
);
