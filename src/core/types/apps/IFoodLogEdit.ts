interface IFoodLogEditModalState {
  activeScrollField: string;
  servingSize: string[];
  watchingFormField: string[];
  isEditMode: boolean;
  isServingLoading: boolean;
}

interface IFoodLogEditModalActions {
  setActiveScrollField: (value: string) => void;
  setServingSize: (value: string[]) => void;
  setWatchingFormField: (value: string[]) => void;
  setIsEditMode: (value: boolean) => void;
  setIsServingLoading: (value: boolean) => void;
}

export type { IFoodLogEditModalActions, IFoodLogEditModalState };
