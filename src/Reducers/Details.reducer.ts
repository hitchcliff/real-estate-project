import {
  Details,
  DetailsActionTypes,
  FETCH_DETAILS_FAILED,
  FETCH_DETAILS_LOADING,
  FETCH_DETAILS_SUCCESS,
} from '../types/Details.types';

export interface IDetailsReducerProp {
  data: Details[];
  loading: boolean;
}

const initialState = {
  loading: true,
  data: [],
};

export const DetailsReducer = (
  state: IDetailsReducerProp = initialState,
  action: DetailsActionTypes,
) => {
  switch (action.type) {
    case FETCH_DETAILS_LOADING: {
      return {
        loading: true,
      };
    }
    case FETCH_DETAILS_SUCCESS: {
      return {
        data: action.payload,
        loading: false,
      };
    }
    case FETCH_DETAILS_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
