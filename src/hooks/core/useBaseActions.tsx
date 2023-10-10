/* eslint-disable @typescript-eslint/return-await */
import { ResponseType } from "axios";
import { apiSvc } from "@app/core/services";
import useAsyncStorage from "@app/hooks/core/useAsyncStorage";
import { IAuthenticate, IServerResponse } from "@app/core/types";
import { CREDENTIALS } from "@app/constants";
import useActions from "./useActions";

type TProps<R> = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "QUERY";
  params?: { [key: string]: any } | null;
  body?: R;
  successMessage?: string;
  errorMessage?: string;
  useLoader?: boolean;
  tokenValue?: string;
  responseType?: ResponseType;
  ignoreEndLoader?: boolean;
  finalCallback?: () => void;
  previewCallback?: () => void;
};

const useBaseAction = () => {
  const { setLoader, setError, setNotification } = useActions();
  const { asyncStorageGetItem } = useAsyncStorage();

  const generateRequest = async <T, R>({
    url,
    method,
    body,
    params,
    tokenValue,
    responseType,
  }: TProps<T>) => {
    const credentials = await asyncStorageGetItem<IAuthenticate | null>(CREDENTIALS);
    const api = apiSvc({ token: credentials?.accessToken || tokenValue || "" });
    const options = {
      params: params || {},
      responseType: responseType || undefined,
    };

    switch (method) {
      case "GET":
      case "QUERY":
        return await api.get<T, IServerResponse<R>>(url, options);
      case "POST":
        return await api.post<T, IServerResponse<R>>(url, body || undefined, options);
      case "PUT":
        return await api.put<T, IServerResponse<R>>(url, body || undefined, options);
      case "DELETE":
        return await api.delete<T, IServerResponse<R>>(url, {
          data: body,
        });
      default:
        return await api.get<T, IServerResponse<R>>(url, options);
    }
  };

  const request = async <T, R>(
    {
      url,
      method,
      body,
      successMessage,
      errorMessage,
      params,
      useLoader = true,
      tokenValue,
      responseType,
      ignoreEndLoader,
      finalCallback,
      previewCallback,
    }: TProps<T>,
    successCallback?: (data?: any) => Promise<void>,
    errorCallback?: () => Promise<void>,
    finallyCallback?: () => Promise<void>,
  ) => {
    if (useLoader) setLoader(true);
    try {
      if (previewCallback) previewCallback();
      const response = await generateRequest<T, R>({
        url,
        method,
        body,
        params,
        tokenValue,
        responseType,
      });
      const data = response ? response.data : null;

      if (successCallback) await successCallback(data);
      if (useLoader && !ignoreEndLoader) setLoader(false);
      setError("");
      if (successMessage)
        setNotification({ type: "success", messages: successMessage, show: true });
      if (!response?.succeeded && response?.errors.length) {
        const responseErrmessages = Object.entries(response?.errors)
          .map(([, value]) => value)
          .join(", ");
        setNotification({
          type: "danger",
          messages: responseErrmessages,
          show: true,
        });
      }
      return data;
    } catch (error: any) {
      let responseErrmessages = error?.response?.data?.Errors || "Something went wrong!";
      if (Array.isArray(responseErrmessages)) {
        responseErrmessages = Object.entries(responseErrmessages)
          .map(([, value]) => value)
          .join(", ");
      }

      if (errorCallback) await errorCallback();
      setError(responseErrmessages);
      setNotification({
        type: "danger",
        messages: errorMessage || responseErrmessages,
        show: true,
      });
      return null;
    } finally {
      if (useLoader) setLoader(false);
      if (finallyCallback) await finallyCallback();
      if (finalCallback) finalCallback();
    }
  };

  return {
    request,
  };
};

export default useBaseAction;
