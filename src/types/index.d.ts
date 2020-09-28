import { Properties, Address } from './ListForRent.types';

// map property
export interface MapProperties extends Properties {
  address: MapAddress;
}

// map address
// export interface MapAddress extends Address {
//   lat: number;
//   lon: number;
// }

// extend
export type MapAndProperty = MapProperties | Properties;
