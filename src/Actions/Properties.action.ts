import Axios from 'axios';
import { Dispatch } from 'react';
import {
  fetchListDispatchTypes,
  FETCH_LIST_FAILED,
  FETCH_LIST_LOADING,
  FETCH_LIST_SUCCESS,
} from '../types/Properties.types';
export const PropertiesAction = (prop_type: string) => async (
  dispatch: Dispatch<fetchListDispatchTypes>,
) => {
  try {
    dispatch({
      type: FETCH_LIST_LOADING,
    });

    const endpoint = `https://hitchcliff.github.io/realtors-api/${prop_type}.json`;
    const { data } = await Axios.get(endpoint);
    dispatch({
      type: FETCH_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_LIST_FAILED,
    });
  }
};
