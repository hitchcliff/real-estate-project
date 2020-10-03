import { Address, ClientDisplayFlags, Meta, TrackingParams } from '.';

// results sale
export interface ResultSale {
  meta: Meta; // index
  properties: PropertiesSale[];
}

// formatted data for sale
export interface FormattedDataSale {
  tracking_params: TrackingParams; //index
  properties: PropertiesSale[];
}

// sale properties
export interface PropertiesSale {
  property_id: number;
  thumbnail: string;
  prop_type: string;
  last_update: Date;
  prop_status: string;
  listing_id: string;
  agents: string;
  price: number;
  beds: number;
  baths: number;
  lot_size: LotSize;
  branding: string;
  building_size: LotSize;
  address: Address; // index
  client_display_flags: ClientDisplayFlags; // index
}

export interface SalePhotos {
  thumbnail: string;
}

interface LotSize {
  size: number;
}
