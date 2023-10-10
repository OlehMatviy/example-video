import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@app/store/api/baseApi";
import appSlice from "@app/store/slices/appSlicer";
import userSlice from "@app/store/slices/userSlicer";
import barCodeFoodSlice from "@app/store/slices/barCodeFoodSlicer";
import animationsSlice from "@app/store/slices/animationsSlicer";
import onboardingSlice from "@app/store/slices/onboardingSlicer";

const createStore = (options?: ConfigureStoreOptions["preloadedState"] | undefined) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      application: appSlice.reducer,
      user: userSlice.reducer,
      barCodeFood: barCodeFoodSlice.reducer,
      animations: animationsSlice.reducer,
      onboardings: onboardingSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    ...options,
  });

const store = createStore();
setupListeners(store.dispatch);

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export { createStore, store };

export type { AppDispatch, RootState };
