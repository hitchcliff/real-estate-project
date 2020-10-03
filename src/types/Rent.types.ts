import {
  Address,
  ClientDisplayFlags,
  Community,
  Meta,
  TrackingParams,
} from '.';

// results rent
export interface ResultRent {
  meta: Meta; // index
  properties: PropertiesRent[];
}

// list for rent formatted data for rent
export interface FormattedDataRent {
  tracking_params: TrackingParams; // index
  properties: PropertiesRent[];
}

// properties
export interface PropertiesRent {
  photos: object[];
  property_id: string;
  prop_type: string;
  last_update: Date;
  prop_status: string;
  community: Community; // index
  address: Address; // index
  client_display_flags: ClientDisplayFlags; // index
}

// map property extends address
export interface MapProperties extends PropertiesRent {
  address2: MapAddress;
}

// extending address
export interface MapAddress extends Address {
  photos?: string;
  price: number | null;
  lat: number;
  lon: number;
  thumbnail?: string;
  sold_photos?: string;
}

// photos
export type RentPhotos = [];
export type MapAndProperty = PropertiesRent | MapProperties; // export
