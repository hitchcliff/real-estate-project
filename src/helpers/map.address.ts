import { MapAndProperty } from '../types';
import { MapAddress } from '../types/ListForRent.types';

export const getAddress = (
  items: MapAndProperty[],
): MapAddress[] | undefined => {
  const new_items = [];

  for (const item of items) {
    new_items.push({
      lat: item.address.lat,
      lon: item.address.lon,
      line: item.address.line,
      city: item.address.city,
      neighborhood_name: item.address.neighborhood_name,
    });
  }
  return new_items;
};
