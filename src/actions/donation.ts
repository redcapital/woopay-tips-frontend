import { createAction } from "redux-actions";

export const createDonation = createAction(
  "DONATION.CREATE",
  (params: { name: string; description?: string }) => params
);

export const createDonationDone = createAction(
  "DONATION.CREATE_DONE",
  (service_name: string) => ({ service_name })
);

export const makeDonation = createAction(
  "DONATION.MAKE",
  (params: { login: string; service_name: string; amount: number }) => params
);

export const initializePaymentOperation = createAction(
  "DONATION.INIT_PAYMENT_OPERATION",
  (params: {
    frame_url: string;
    operation_id: string;
    payment_operation: string;
  }) => params
);
