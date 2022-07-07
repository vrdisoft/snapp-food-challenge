import { ACTIONS } from "../../action/vendoreList/actionCreator";

export const INIT_STATE: VendoreListStateType = {
  data: [],
  page: 0,
  count: 0,
  open_count: 0,
};

function handleGetVendoreListSuccess(
  state: VendoreListStateType,
  payload: any
) {
  const data = payload.finalResult.filter(
    (itam: any) => itam.type === "VENDOR"
  );

  return {
    ...state,
    data: [...data],
    count: payload.count,
    open_count: payload.open_count,
  };
}

function handleGetVendoreListFailed(state: VendoreListStateType) {
  return {
    ...state,
  };
}

const ACTION_HANDLERS = {
  [ACTIONS.GET_VENDORE_LIST_SUCCESS]: handleGetVendoreListSuccess,
  [ACTIONS.GET_VENDORE_LIST_FAILED]: handleGetVendoreListFailed,
};

export default function reducer(
  state: VendoreListStateType = INIT_STATE,
  action: ActinType
) {
  return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload);
}
