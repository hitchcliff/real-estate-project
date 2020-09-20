import { fetchListDispatchTypes, FETCH_LIST_FAILED, FETCH_LIST_LOADING, FETCH_LIST_SUCCESS, Result } from "../types/ListForRent.types";

interface ListForRentInitialState {
    loading: boolean,
    data?: Result,
}

const initialState = {
    loading: false,
}

export const ListForRentReducer = (state: ListForRentInitialState = initialState, action: fetchListDispatchTypes) => {
    switch(action.type) {
        case FETCH_LIST_LOADING: {
            return {
                loading: true
            }
        }
        case FETCH_LIST_SUCCESS: {
            return {
                loading: false,
                data: action.payload
            }
        }
        case FETCH_LIST_FAILED: {
            return {
                loading: false,
            }
        }
        default: 
            return state
    }
}