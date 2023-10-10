import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { appConfig } from "@app/constants";

type TAxiosConfigOptions = {
  token: string;
};

export const axiosConfig = () => {
  const headers = {
    "Content-type": "application/json",
    Accept: "application/json",
  } as unknown as AxiosRequestHeaders;

  return {
    withCredentials: false,
    baseURL: appConfig.baseApiUrl,
    headers,
  } as AxiosRequestConfig;
};

const apiSvc = (options?: TAxiosConfigOptions) => {
  const instance = axios.create(axiosConfig());

  instance.interceptors.request.use(
    async (config) => {
      const { token } = options || {};
      const originalConfig = config as any;
      originalConfig.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export default apiSvc;
