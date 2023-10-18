import axios from "axios";

const axiosConfig = {
  baseURL: "https://api.behinkar.ir/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.defaults.timeout = 20000;

axiosInstance.interceptors.request.use(
  (config) => {
    // const accessToken = localStorage.getItem("access");

    // if (accessToken) {
    //   config.headers["Authorization"] = "Bearer " + accessToken;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
