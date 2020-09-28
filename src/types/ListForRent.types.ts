export const FETCH_LIST_LOADING = 'FETCH_LIST_LOADING';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILED = 'FETCH_LIST_FAILED';

interface FetchListLoading {
  type: typeof FETCH_LIST_LOADING;
}
interface FetchListSuccess {
  type: typeof FETCH_LIST_SUCCESS;
  payload: Result;
}
interface FetchListFailed {
  type: typeof FETCH_LIST_FAILED;
}

// list for rent before formatted data
export interface Result {
  meta: Meta;
  properties: Properties[];
}

// list for rent formatted data
export interface FormattedData {
  tracking_params: TrackingParams;
  properties: Properties[];
}

export interface Meta {
  tracking_params: TrackingParams;
}

export interface TrackingParams {
  channel: string;
  searchCityState: string;
  searchMinPrice: string;
  searchMaxPrice: string;
  propertyType: string;
  searchBedroom: string;
  searchBathRoom: string;
  listingActivity: string;
  searchResults: string;
}

export interface Properties {
  photos: object[];
  property_id: string;
  community: Community;
  address: Address;
  client_display_flags: ClientDisplayFlags;
  prop_type: string;
  last_update: Date;
  prop_status: string;
}

export interface Community {
  id: number;
  name: string;
  sqft_max: number;
  sqft_min: number;
  price_max: number;
  price_min: number;
  baths_max: number;
  beds_max: number;
}

export interface Address {
  line: string;
  city: string;
  neighborhood_name: string;
}

// extending address
export interface MapAddress extends Address {
  lat: number;
  lon: number;
}
// map address or normal address
export type MapAddressOrAddress = Address | MapAddress;

export interface ClientDisplayFlags {
  is_new_listing: boolean;
}

export type Photos = [];

export type fetchListDispatchTypes =
  | FetchListLoading
  | FetchListSuccess
  | FetchListFailed;
