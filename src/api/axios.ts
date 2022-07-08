import axios from "axios";

const BASE_URL = "https://snappfood.ir/mobile/v3/";
axios.defaults.baseURL = BASE_URL;

const request = ({
  url,
  type = "post",
  data,
}: {
  url: string;
  type?: string;
  data?: object;
}) => {
  if (type === "get") {
    return axios
      .get(url, { params: data })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error?.response;
      });
  } else {
    return axios({
      method: type,
      url: url,
      data: data,
    })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error?.response;
      });
  }
};

export default request;
