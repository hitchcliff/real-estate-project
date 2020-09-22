import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { 
    FiltersDispatchTypes, 
    GET_BATHS, 
    GET_BEDS, 
    GET_LISTING_STATUS, 
    GET_PRICE, 
    GET_PROPERTY_TYPE, 
    GET_SIZE, 
    Price, 
    Size 
} from "../types/Filters.types";

interface InitialStateProp { // types
    property_type?: string,
    beds?: number,
    baths?: number,
    listing?: string,
    sqft_min?: Size,
    sqft_max?: Size,
    price?: Price
}
const initialState: InitialStateProp = {} // state

export const FilterReducer = (state: InitialStateProp = initialState, action: FiltersDispatchTypes) => {
    switch(action.type) {
        case GET_PRICE: { // store the price
            return {
                ...state,
                price: action.payload 
            }
        }
        case GET_PROPERTY_TYPE: { // store the property type
            return {
                ...state,
                property_type: action.payload
            }
        }
        case GET_BEDS: { // store the beds
            return {
                ...state,
                beds: action.payload
            }
        }
        case GET_BATHS: { // store the baths
            return {
                ...state,
                baths: action.payload
            }
        }
        case GET_LISTING_STATUS: { // store the listing
            return {
                ...state,
                listing: action.payload
            }
        }
        case GET_SIZE: { // store the size
            return {
                ...state,
                listing: action.payload
            }
        }
        default: // keep the default state 
            return state;
    }
}