export const FETCH_LIST_LOADING = "FETCH_LIST_LOADING";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAILED = "FETCH_LIST_FAILED";

interface FetchListLoading {
    type: typeof FETCH_LIST_LOADING;
}
interface FetchListSuccess {
    type: typeof FETCH_LIST_SUCCESS;
    payload: Meta 
}
interface FetchListFailed {
    type: typeof FETCH_LIST_FAILED;
}

export interface Meta {
    tracking_params: TrackingParams,
    properties: Properties[] 
}

export type TrackingParams = {
    channel: string,
    searchCityState: string,
    searchMinPrice: string,
    searchMaxPrice: string,
    propertyType: string,
    searchBedroom: string,
    searchBathRoom: string,
    listingActivity: string,
    searchResults: string,
}

export type Properties = {
    community: Community,
    address: Address,
    client_display_flags: ClientDisplayFlags
}

export type Community = {
    id: number,
    name: string,
    sqft_max: number,
    sqft_min: number,
    price_max: number,
    price_min: number,
    baths_max: number,
    beds_max: number,
}

export type Address = {
    line: string,
    city: string,
    neighborhood_name: string
}

export type ClientDisplayFlags = {
    is_new_listing: boolean,
}

export type Photos = [];

export type fetchListDispatchTypes = FetchListLoading | FetchListSuccess | FetchListFailed; 