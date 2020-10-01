import { extname } from 'path';
import { Properties } from '../types';
import {
  MapAddress,
  MapAndProperty,
  PropertiesRent,
} from '../types/Rent.types';
import { PropertiesSale, ResultSale } from '../types/Sale.types';

export const getAddress = <T>(
  items: MapAndProperty[] | T,
): MapAddress[] | undefined | any => {
  const new_items = [];

  for (const item of items) {
    new_items.push({
      line: item.address.line,
      city: item.address.city,
      neighborhood_name: item.address.neighborhood_name,
      photos: Object.values(item.photos[0])[0],
      price: item.community.price_max ? item.community.price_max : null,
      lat: item.address.lat,
      lon: item.address.lon,
    });
  }
  return new_items;
};

export const getAddress2 = <T extends PropertiesSale>(items: Array<T>) => {
  const new_items = [];
  for (const item of items) {
    new_items.push({
      line: item.address.line,
      city: item.address.city,
      neighborhood_name: item.address.neighborhood_name,
      photos: item.thumbnail,
      price: item.price,
      lat: item.address.lat,
      lon: item.address.lon,
    });
  }
  return new_items;
};
