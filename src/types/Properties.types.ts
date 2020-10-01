export const FETCH_LIST_LOADING = 'FETCH_LIST_LOADING';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILED = 'FETCH_LIST_FAILED';

interface FetchListLoading {
  type: typeof FETCH_LIST_LOADING;
}
interface FetchListSuccess {
  type: typeof FETCH_LIST_SUCCESS;
  payload: any;
}
interface FetchListFailed {
  type: typeof FETCH_LIST_FAILED;
}

export type fetchListDispatchTypes =
  | FetchListLoading
  | FetchListSuccess
  | FetchListFailed;
