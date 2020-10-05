import { Dispatch } from 'react';
import axios from 'axios';
import {
  DetailsActionTypes,
  FETCH_DETAILS_FAILED,
  FETCH_DETAILS_LOADING,
  FETCH_DETAILS_SUCCESS,
} from '../types/Details.types';

export const DetailsAction = () => async (dispatch: Dispatch<DetailsActionTypes>) => {
  try {
    //   if loading
    dispatch({
      type: FETCH_DETAILS_LOADING,
    });

    const url = `https://hitchcliff.github.io/realtors-api/detail.json`; // test url
    const { data } = await axios.get(url);
    // success
    dispatch({
      type: FETCH_DETAILS_SUCCESS,
      payload: data.properties,
    });
  } catch (error) {
    //   if failed
    dispatch({
      type: FETCH_DETAILS_FAILED,
    });
  }
};
