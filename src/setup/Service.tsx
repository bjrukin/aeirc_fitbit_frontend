import axios from "axios";
import { BASE_URL } from "../baseUrl";

const Service = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

Service.interceptors.request.use(
  (config: any) => {
    const token: any = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers.authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default Service;
