import { all } from "redux-saga/effects";
import vendoreList from "./vendoreList";

export default function* rootSaga() {
  yield all([vendoreList()]);
}
