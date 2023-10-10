import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import appConfig from "@app/constants/Config";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: appConfig.baseApiUrl,
  prepareHeaders: (headers, { getState }) => {
    const { authenticate } = (getState() as RootState).application;
    if (authenticate?.accessToken) {
      headers.set("Authentication", `Bearer ${authenticate?.accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 5 });

export const api = createApi({
  reducerPath: "AppAPi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Time", "Posts", "Counter"],
  endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => "test",
  }),
});
