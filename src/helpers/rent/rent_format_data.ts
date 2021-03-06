import { Community, Address, ClientDisplayFlags } from '../../types';
import { PropertiesRent } from '../../types/Rent.types';

// Properties data format for Rent
export const rent_propertiesDataFormat = (
  data: PropertiesRent[] | undefined,
): PropertiesRent[] | undefined => {
  if (!data) return;
  const properties: PropertiesRent[] = [];

  // format data for css mmunity
  const community = (item: Community): Community => {
    return {
      id: item.id,
      name: item.name,
      sqft_max: item.sqft_max,
      sqft_min: item.sqft_min,
      price_max: item.price_max,
      price_min: item.price_min,
      beds_max: item.beds_max,
      baths_max: item.baths_max,
    };
  };

  // format data for address
  const address = (item: Address): Address => {
    return {
      line: item.line,
      city: item.city,
      neighborhood_name: item.neighborhood_name,
      lon: item.lon,
      lat: item.lat,
    };
  };

  // format data for client display flags
  const clientDisplayFlags = (item: ClientDisplayFlags): ClientDisplayFlags => {
    return {
      is_new_listing: item.is_new_listing,
    };
  };

  data.forEach((item) => {
    // loop all data properties
    properties.push({
      property_id: item.property_id, // id
      photos: item.photos, // photos
      community: community(item.community),
      address: address(item.address),
      client_display_flags: clientDisplayFlags(item.client_display_flags),
      last_update: item.last_update,
      prop_status: item.prop_status,
      prop_type: item.prop_type,
    });
  });

  return properties;
};
