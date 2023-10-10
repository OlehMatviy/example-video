interface IServing {
  gmWgt: number;
  id: number;
  am: number;
  desc: string;
}

const enum EFood {
  Food = 0,
  Dish = 1,
  Favourite = 2,
  Recent = 3,
}

const enum EFoodAction {
  Edit = 0,
  Remove = 1,
  CREATE = 2,
}

interface IFood {
  type: EFood;
  id: string;
  dfSrv: IServing;
  externalId: number;
  name: string;
  serving: number;
  unit?: string | null;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fluids: number;
  isFavourite?: boolean;
  servingSize?: string;
  nutrients?: number;
  mood?: number;
  beanId?: number;
  totalFat?: string;
  favouriteFoodId?: string | null;
}

interface IFoodLogInternal {
  id: string;
  name: string;
  externalId: string;
  ingestion: string;
  serving: number;
  unit: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fluids: number;
  isFavourite?: boolean;
  mood?: number;
  favouriteFoodId?: string | null;
}

interface IFoodLogInternalFavourite extends IFoodLogInternal {
  favouriteFoodId: string;
}

interface IFoodLogCreate {
  foodLogId?: string;
  food: IFoodLogInternal;
  favourite?: boolean;
}

interface IFoodLogCreateFromFavorite {
  foodLogId?: string;
  food: IFoodLogInternalFavourite;
}

interface IFoodLogEdit {
  id?: string;
  food: IFoodLogInternal;
}

interface IFoodLog {
  date: string | Date;
  foodLogId: string;
  foods: IFoodLogInternal[];
}

interface Nutrients {
  val: number;
  nutr: number;
}

interface Weights {
  sortOrder: 1;
  msreDesc: string;
  gmWgt: string;
  amountId: number | null;
  itemDesc: string | null;
  amountMsreDesc: string | null;
}

interface IFoodExternalDetails {
  foodId: number;
  foodDesc: string;
  nutrients: Nutrients[];
  weights: Weights[];
}

interface IFoodForm {
  id: string;
  hours: number;
  minutes: number;
  serving: number;
  msreDesc: number | string;
  partDay: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fluids: number;
  mood?: number;
  foodLogId?: string;
}

interface IFoodUpc {
  beanId: number;
  beanDesc: string;
  weights: Weights[];
}

export type {
  IFoodForm,
  IFoodExternalDetails,
  IServing,
  Weights,
  Nutrients,
  IFoodLog,
  IFoodLogEdit,
  IFoodLogCreate,
  IFood,
  IFoodLogInternal,
  IFoodUpc,
  IFoodLogCreateFromFavorite,
};

export { EFood, EFoodAction };
