import Axios from "axios";
import { Dispatch } from "react"; 
import { fetchListDispatchTypes, FETCH_LIST_FAILED, FETCH_LIST_LOADING, FETCH_LIST_SUCCESS } from "../types/ListForRent.types";
export const ListForRentAction = () => async (dispatch: Dispatch<fetchListDispatchTypes>) => { 
    try {
       dispatch({
           type: FETCH_LIST_LOADING
       }) 
       const endpoint = `https://hitchcliff.github.io/realtors-api/list_for_rent.json`;
       const {data} = await Axios.get(endpoint);
       dispatch({
           type: FETCH_LIST_SUCCESS,
           payload: data
       }) 
    } catch (error) {
        dispatch({
            type: FETCH_LIST_FAILED
        })
        console.log(error)
    }
}