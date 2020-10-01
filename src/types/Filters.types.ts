export const GET_PRICE = 'GET_PRICE';
interface get_price {
  type: typeof GET_PRICE;
  payload: Price;
}

export interface Price {
  min?: number;
  max?: number | string;
}

export const GET_PROPERTY_TYPE = 'GET_PROPERTY_TYPE';
interface get_property_type {
  type: typeof GET_PROPERTY_TYPE;
  payload: string;
}

export const GET_BEDS = 'GET_BEDS';
interface get_beds {
  type: typeof GET_BEDS;
  payload: number; // note: this is max
}

export const GET_BATHS = 'GET_BATHS';
interface get_baths {
  type: typeof GET_BATHS;
  payload: number; // note this is max
}

export const GET_LISTING_STATUS = 'GET_LISTING_STATUS';
interface get_listing_status {
  type: typeof GET_LISTING_STATUS;
  payload: string;
}

export const GET_SIZE = 'GET_SIZE';
interface get_size {
  type: typeof GET_SIZE;
  payload: Size;
}

export type Size = {
  sqft_min: number;
  sqft_max: number;
};

export type Filters = {
  price: Price;
  property_type: string;
  beds: number;
  baths: number;
  listing: string;
  size: Size;
};

// all types in this file
export type FiltersDispatchTypes =
  | get_price
  | get_property_type
  | get_beds
  | get_baths
  | get_listing_status
  | get_size;
