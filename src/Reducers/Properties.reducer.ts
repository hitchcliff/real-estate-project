import {
  fetchListDispatchTypes,
  FETCH_LIST_FAILED,
  FETCH_LIST_LOADING,
  FETCH_LIST_SUCCESS,
} from '../types/Properties.types';

interface IPropertiesReducer {
  loading: boolean;
  data?: any;
}

const initialState = {
  loading: false,
};

export const PropertiesReducer = (
  state: IPropertiesReducer = initialState,
  action: fetchListDispatchTypes,
) => {
  switch (action.type) {
    case FETCH_LIST_LOADING: {
      return {
        loading: true,
      };
    }
    case FETCH_LIST_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
      };
    }
    case FETCH_LIST_FAILED: {
      return {
        loading: false,
      };
    }
    default:
      return state;
  }
};
