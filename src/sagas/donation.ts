import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  createDonation,
  createDonationDone,
  initializePaymentOperation,
  makeDonation,
} from "../actions/donation";
import { client } from "../xhr";
import history from "../history";

function* handleCreateDonation(action: ReturnType<typeof createDonation>): any {
  try {
    const response = yield call(client.post, "/service/donate", {
      ...action.payload,
      fields: { amount: 0 },
    });
    if (response && response.status >= 200 && response.status < 300) {
      yield put(createDonationDone(response.data.service_name));
      history.push("/donation/create-done");
    }
  } catch (err) {
    alert("Ошибка на сервере");
  }
}

function* handleMakeDonation(action: ReturnType<typeof makeDonation>): any {
  try {
    const response = yield call(client.post, "/tip", action.payload);
    if (response && response.status >= 200 && response.status < 300) {
      yield put(initializePaymentOperation(response.data));
    }
  } catch (err) {
    alert("Ошибка на сервере");
  }
}

export default function* donationSaga() {
  yield all([
    takeEvery(createDonation, handleCreateDonation),
    takeEvery(makeDonation, handleMakeDonation),
  ]);
}
