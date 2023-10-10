import { createContext } from "react";
import { IFood, IFoodLogInternal, ITargetZone } from "@app/core/types";

interface IFoodsTabContext {
  searchAutocomplete: string;
  suggestions: IFood[];
  selectedFood: IFood;
  targetZones: ITargetZone[];
  activeEditFood: IFoodLogInternal | null;
  isSearchLoading: boolean;
  onChangeCalendarDate: (date: string) => void;
  onChangeSearchAutocomplete: (search: string) => void;
  onClickFoodHandler: (food: IFood) => Promise<void>;
  onClickFoodRowHandler: (food: IFood) => void;
  onClearSuggestions: () => void;
  onEndReachedSuggestions: () => void;
  onChangeActiveFood: (value: IFoodLogInternal) => void;
}

const FoodsTabContext = createContext<IFoodsTabContext>({} as IFoodsTabContext);

export default FoodsTabContext;
