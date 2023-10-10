import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFood, IFoodUpc } from "@app/core/types";
import { TBarCodeDetails } from "@app/core/types/apps/IBarCode";
import TBarCodeState from "./type";

const initialState: TBarCodeState = {
  foodUpc: {} as IFoodUpc,
  food: {} as IFood,
  foodLogId: "",
};

const barCodeFoodSlice = createSlice({
  name: "barCodeFood",
  initialState,
  reducers: {
    setFoodUpc: (state: TBarCodeState, action: PayloadAction<IFoodUpc>) => {
      state.foodUpc = action.payload;
    },
    setFood: (state: TBarCodeState, action: PayloadAction<IFood>) => {
      state.food = action.payload;
    },
    setFoodDetails: (state: TBarCodeState, action: PayloadAction<TBarCodeDetails>) => {
      state.foodUpc = action.payload.foodUpc;
      state.food = action.payload.food;
    },
    setFoodLogId: (state: TBarCodeState, action: PayloadAction<string>) => {
      state.foodLogId = action.payload;
    },
    clearDetails: (state: TBarCodeState, action: PayloadAction<null>) => {
      state.foodUpc = action.payload;
      state.food = action.payload;
    },
  },
});
export default barCodeFoodSlice;
