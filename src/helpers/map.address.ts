import { MapAndProperty } from '../types';
import { MapAddress } from '../types/ListForRent.types';

export const getAddress = (
  items: MapAndProperty[],
): MapAddress[] | undefined | null => {
  const new_items = [];

  for (const item of items) {
    new_items.push({
      lat: item.address.lat,
      lon: item.address.lon,
      line: item.address.line,
      city: item.address.city,
      neighborhood_name: item.address.neighborhood_name,
      photos: Object.values(item.photos[0])[0],
      price: item.community.price_max ? item.community.price_max : null,
    });
  }
  return new_items;
};
