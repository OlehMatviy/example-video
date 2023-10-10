import { IFood, IFoodUpc } from "@app/core/types";

const enum EBarCodeStatus {
  INIT = "init",
  WARN = "warn",
  SUCCESS = "success",
}

type TBarCodeDetails = {
  foodUpc: IFoodUpc;
  food: IFood;
};

export type { TBarCodeDetails };

export { EBarCodeStatus };
