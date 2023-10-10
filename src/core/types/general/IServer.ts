export interface IServerResponse<R> {
  succeeded: boolean;
  data: R | null;
  errors: string[];
}

export interface IServerResponseList<R> {
  items: R;
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
