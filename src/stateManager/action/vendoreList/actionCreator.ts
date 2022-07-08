export const ACTIONS = {
  GET_VENDORE_LIST: "GET_VENDORE_LIST",
  GET_VENDORE_LIST_SUCCESS: "GET_VENDORE_LIST_SUCCESS",
  GET_VENDORE_LIST_FAILED: "GET_VENDORE_LIST_FAILED",
};

export const getVendoreList = (data?: any) => ({
  type: ACTIONS.GET_VENDORE_LIST,
  payload: data,
});

export const getVendoreListSuccess = (data?: any) => ({
  type: ACTIONS.GET_VENDORE_LIST_SUCCESS,
  payload: data,
});

export const getVendoreListFailed = (data?: any) => ({
  type: ACTIONS.GET_VENDORE_LIST_FAILED,
  payload: data,
});
