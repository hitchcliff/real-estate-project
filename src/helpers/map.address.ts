import { MapAddress, MapAndProperty } from '../types/Rent.types';

export const getAddress = <T>(
  items: MapAndProperty[] | T | any,
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

export const getPropertyAddress = <T>(items: T[] | unknown): MapAddress[] | any => {
  const addresses: MapAddress[] = [];

  if (!Array.isArray(items)) {
    const item: any = items;
    return {
      line: item.address ? item.address.line : 'No address',
      city: item.address.city,
      neighborhood_name: item.address.neighborhood_name,
      thumbnail: item.photos[0].href,
      price: item.price,
      lat: item.address.lat,
      lon: item.address.lon,
    };
  }

  for (const item of items) {
    addresses.push({
      line: item.address ? item.address.line : 'No address',
      city: item.address.city,
      neighborhood_name: item.address.neighborhood_name,
      thumbnail: item.thumbnail,
      price: item.price,
      lat: item.address.lat,
      lon: item.address.lon,
      sold_photos: item.photos ? item.photos[0].href : undefined,
    });
  }

  return addresses;
};
