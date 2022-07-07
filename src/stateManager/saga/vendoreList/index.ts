import { call, put, takeLatest } from "redux-saga/effects";
import { getVendorsListApi } from "../../../api/vendoreList";
import { ACTIONS } from "../../action/vendoreList/actionCreator";

function* handleGetVendoreList(action: ActinType) {
  try {
    console.log(action);
    /* @ts-ignore: Unreachable code error*/
    const vendoreList = yield call(getVendorsListApi, action.payload);
    yield put({
      type: "GET_VENDORE_LIST_SUCCESS",
      payload: { ...vendoreList.data.data },
    });
  } catch (err: any) {
    yield put({ type: "GET_VENDORE_LIST_FAILED", message: err.message });
  }
}

function* VendoreListSaga() {
  yield takeLatest(ACTIONS.GET_VENDORE_LIST, handleGetVendoreList);
}

export default VendoreListSaga;
