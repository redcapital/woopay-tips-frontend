import { all, call, put, takeEvery } from "redux-saga/effects";
import { createDonation, createDonationDone } from "../actions/donation";
import { client } from "../xhr";

function* handleCreateDonation(action: ReturnType<typeof createDonation>): any {
  try {
    const response = yield call(client.post, "/service/donate", {
      ...action.payload,
      fields: { amount: 0 },
    });
    if (response && response.status >= 200 && response.status < 300) {
      yield put(createDonationDone(response.data.service_name));
      window.history.pushState({}, "", "/create-donation?done=1");
    }
  } catch (err) {
    alert("Ошибка на сервере");
  }
}

export default function* donationSaga() {
  yield all([takeEvery(createDonation, handleCreateDonation)]);
}
