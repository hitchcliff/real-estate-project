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

export interface IFilterProp { // types
    property_type?: string,
    beds?: number,
    baths?: number,
    listing?: string,
    size?: Size,
    price?: Price
}
const initialState: IFilterProp = {} // state

export const FilterReducer = (state: IFilterProp = initialState, action: FiltersDispatchTypes) => {
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
                size: action.payload
            }
        }
        default: // keep the default state 
            return state;
    }
}