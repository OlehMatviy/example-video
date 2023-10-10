interface ICreateFavorite {
  foodId: string;
  food: {
    name: string;
    externalId: string;
    serving: number;
    unit: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    fluids: number;
    ingestion: string;
    favouriteFoodId?: string | null;
  };
  favourite: boolean;
}

interface IFavoriteFood {
  id: string;
  calories: number;
  carbs: number;
  date: string;
  externalId: string | null;
  fat: number;
  fluids: number;
  name: string;
  protein: number;
  serving: number;
  unit: string;
  isEditMode?: boolean;
}

interface IFavoriteList {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: IFavoriteFood[];
  pageNumber: number;
  totalCount: number;
  totalPages: number;
}

interface IFavoriteGetAllParam {
  filter: string;
  pageNum: number;
  pageSize: number;
  newData: boolean;
  useLoader: boolean;
}

export type { ICreateFavorite, IFavoriteList, IFavoriteFood, IFavoriteGetAllParam };
