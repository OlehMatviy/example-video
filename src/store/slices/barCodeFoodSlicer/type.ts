import { IFood, IFoodUpc } from "@app/core/types";

type TBarCodeState = {
  foodUpc: IFoodUpc | null;
  food: IFood | null;
  foodLogId: string;
};

export default TBarCodeState;
