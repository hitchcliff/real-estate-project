import { Dispatch } from "react";
import { 
    FiltersDispatchTypes, //types
    GET_BATHS, // constants 
    GET_BEDS, 
    GET_LISTING_STATUS, 
    GET_PRICE, 
    GET_PROPERTY_TYPE, 
    GET_SIZE, 
    Price, 
    Size, 
} from "../types/Filters.types";

// price action
export const SortByPrice_action = (min: Price["min"], max: Price["max"]) => async (dispatch: Dispatch<FiltersDispatchTypes>) => {
    try {
       dispatch({
           type: GET_PRICE,
           payload: {
               min,
               max
           } 
       }) 
    } catch (error) {
       console.log('Price Error', error) 
    }
}

// property_type action
export const SortByProperty_action = (property: string) => async(dispatch: Dispatch<FiltersDispatchTypes>) => {
    try {
       dispatch({
           type: GET_PROPERTY_TYPE,
           payload: property
       }) 
    } catch (error) {
        console.log('Property Type Error', error);
    }
}

// beds action
export const SortByBeds_action = (beds: string) => async (dispatch: Dispatch<FiltersDispatchTypes>) => {
    try {
       dispatch({
           type: GET_BEDS,
           payload: parseInt(beds)
       }) 
    } catch (error) {
       console.log('Beds Error', error) 
    }
}

// baths action
export const SortByBaths_action = (baths: string) => async (dispatch: Dispatch<FiltersDispatchTypes>) => {
    try {
       dispatch({
           type: GET_BATHS,
           payload: parseInt(baths) // parse to int
       }) 
    } catch (error) {
       console.log('Baths Error', error) 
    }
}

// listing action
export const SortByListingStatus_action = (listing: string) => async (dispatch: Dispatch<FiltersDispatchTypes>) => {
    try {
       dispatch({
            type: GET_LISTING_STATUS,
            payload: listing
       }) 
    } catch (error) {
      console.log('Listing Error', error)  
    }
}

// size
export const SortBySize_action = (size: Size) => async (dispatch: Dispatch<FiltersDispatchTypes>) => {
    try {
       dispatch({
            type: GET_SIZE,
            payload: size 
       }) 
    } catch (error) {
      console.log('Listing Error', error)  
    }
}