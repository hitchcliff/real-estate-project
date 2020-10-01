// meta
export interface Meta {
  tracking_params: TrackingParams;
}

// tracking params
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

// community
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

// address
export interface Address {
  line: string;
  city: string;
  neighborhood_name: string;
  lat?: number;
  lon?: number;
}

// client display flags
export interface ClientDisplayFlags {
  is_new_listing: boolean;
}

export interface Properties<T> {
  items: T;
  address: Address;
  community: Community;
  client_display_flags: ClientDisplayFlags;
}
