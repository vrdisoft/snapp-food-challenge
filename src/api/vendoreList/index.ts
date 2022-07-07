import request from "../axios";

const getVendorsListApi = (data: VendorsListApiParam) =>
  request({ url: "restaurant/vendors-list", type: "get", data });

export { getVendorsListApi };
