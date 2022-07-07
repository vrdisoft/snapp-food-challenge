import request from "../axios";

const getVendorsListApi = (data: object) =>
  request({ url: "restaurant/vendors-list", type: "get", data });

export { getVendorsListApi };
