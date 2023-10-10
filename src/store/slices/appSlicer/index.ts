import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@app/core/types/general/IUser";
import { IAuthenticate, INotification } from "@app/core/types";
import { CL_MAIN_TEMPLATE } from "@app/styles/colors";
import type TAppState from "./type";

const initialState: TAppState = {
  currentUser: null,
  isLoading: false,
  errorMessage: "",
  notification: {} as INotification,
  appInitialized: false,
  authenticate: null,
  isHideTabBar: false,
  statusBarColor: CL_MAIN_TEMPLATE,
  triggerModals: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoader: (state: TAppState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCurrentUser: (state: TAppState, action: PayloadAction<IUser | null>) => {
      state.currentUser = action.payload;
    },
    setAppInitialized: (state: TAppState, action: PayloadAction<boolean>) => {
      state.appInitialized = action.payload;
    },
    setNotification: (state: TAppState, action: PayloadAction<INotification>) => {
      state.notification = action.payload;
    },
    setError: (state: TAppState, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    signIn: (state: TAppState, action: PayloadAction<IAuthenticate>) => {
      state.currentUser = { ...({} as IUser), id: action.payload.userId };
      state.authenticate = { ...action.payload };
    },
    logout: (state: TAppState, action: PayloadAction<null>) => {
      state.currentUser = { ...({} as IUser) };
      state.authenticate = action.payload;
      state.appInitialized = false;
    },
    setHideTabBar: (state: TAppState, action: PayloadAction<boolean>) => {
      state.isHideTabBar = action.payload;
    },
    setStatusBarColor: (state: TAppState, action: PayloadAction<string>) => {
      state.statusBarColor = action.payload;
    },
    setTrigger: (state: TAppState, action: PayloadAction<string>) => {
      state.triggerModals = action.payload;
    },
  },
});
export default appSlice;
