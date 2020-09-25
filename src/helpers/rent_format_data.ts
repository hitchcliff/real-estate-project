import { Address, ClientDisplayFlags, Community, Properties } from "../types/ListForRent.types";

// Properties data format for Rent
export const rent_propertiesDataFormat = (data: Properties[] | undefined): Properties[] | undefined => {
    if(!data) return;
    const properties: Properties[] = [];

    // format data for community
    const Community = (item: Community) => {
        return {
           id: item.id,
           name: item.name,
           sqft_max: item.sqft_max,
           sqft_min: item.sqft_min,
           price_max: item.price_max,
           price_min: item.price_min,
           beds_max: item.beds_max, 
           baths_max: item.baths_max,
        }
    }

    // format data for address
    const Address = (item: Address) => {
        return {
            line: item.line,
            city: item.city,
            neighborhood_name: item.neighborhood_name,
        }
    }

    // format data for client display flags
    const ClientDisplayFlags = (item: ClientDisplayFlags) => {
        return {
            is_new_listing: item.is_new_listing,
        }
    }

    data.forEach(item => { // loop all data properties
       properties.push({
           property_id: item.property_id, // id
           photos: item.photos, // photos
           community: Community(item.community),
           address: Address(item.address),
           client_display_flags: ClientDisplayFlags(item.client_display_flags),
           last_update: item.last_update,
           prop_status: item.prop_status,
           prop_type: item.prop_type,
       }) 
    })

    return properties;
}