import { Address } from '.';

export const FETCH_DETAILS_LOADING = 'FETCH_DETAILS_LOADING';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_FAILED = 'FETCH_DETAILS_FAILED';

export interface FetchDetailsLoading {
  type: typeof FETCH_DETAILS_LOADING;
}
export interface FetchDetailsSuccess {
  type: typeof FETCH_DETAILS_SUCCESS;
  payload: Details;
}
export interface FetchDetailsFailed {
  type: typeof FETCH_DETAILS_FAILED;
}

// details
export interface Details {
  address: AddressDetails;
  agents: AgentDetails;
  baths: number;
  beds: number;
  building_size: BuildingSizeDetail;
  lot_size: LotSizeDetail;
  client_display_flags: { is_recently_sold: boolean; presentation_status: string };
  description: string;
  feature_tags: string[];
  features: FeatureDetails[];
  last_update: Date;
  listing_status: string;
  photos: string[];
  price: number;
  prop_status: string;
  prop_type: string;
  propperty_history: [{ price: number; sqft: number; date: Date; event_name: string }];
  property_id: string;
  schools: SchoolDetails[];
  stories: number;
  year_built: number;
}

// address
export interface AddressDetails extends Address {
  state: string;
  country: string;
  postal_code: string;
  time_zone: string;
}

// agents
export interface AgentDetails {
  advertiser_id: string;
  email: string;
  href: string;
  id: string;
  name: string;
  slogan: string;
  photo: PhotoAgent;
}

// agents photo
interface PhotoAgent {
  href: string;
}

// building size
interface BuildingSizeDetail {
  size: number;
  units: string;
}

// lot size
interface LotSizeDetail extends BuildingSizeDetail {}

// features
interface FeatureDetails {
  category: string;
  parent_category: string;
  text: string[];
}

// schools
interface SchoolDetails {
  distance_in_miles: number;
  lat: number;
  lon: number;
  education_levels: string[];
  funding_type: string;
  name: string;
  phone: string;
  ratings: { great_school_rating: number; parent_rating: number };
}

// exports
export type DetailsActionTypes =
  | FetchDetailsSuccess
  | FetchDetailsLoading
  | FetchDetailsFailed;
