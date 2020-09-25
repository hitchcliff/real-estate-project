import { Result , Properties, TrackingParams, FormattedData } from "../types/ListForRent.types";

export const getAccordionActiveItem = (items: NodeListOf<Element>) => {
    let result = [];
    let activeItem: number = 0;
    for(let i=0; i<items.length; i++) {
       result[i] = items[i].getAttribute('aria-expanded') === "true" // get attributes
       items[i].classList.remove('active') // remove active 
    }

    for(let i=0; i<result.length; i++) {
        if(result[i] === true) {
            activeItem = i // set current index of the active item
        }
    }

    return activeItem; // return the index
}

export const setClassActive = (index: number, item: NodeListOf<Element>) => {
    if(!item.length) return; // if its undefined, simply return
    item[index].classList.add('active') // add class to the button

}

// First Data Format
export const formatData = (data: Result | undefined): FormattedData | undefined => {
    if(!data) return; //return if data doesn't exist
    const { meta: {tracking_params}, properties} = data;
    const new_properties: Properties[] = []; // new properties stored
    let new_tracking_params: TrackingParams = { // new tracking_params store
        channel: tracking_params.channel,
        searchCityState: tracking_params.searchCityState,
        searchMinPrice: tracking_params.searchMinPrice,
        searchMaxPrice: tracking_params.searchMaxPrice,
        propertyType: tracking_params.propertyType,
        searchBedroom: tracking_params.searchBedroom,
        searchBathRoom: tracking_params.searchBathRoom,
        searchResults: tracking_params.searchResults,
        listingActivity: tracking_params.listingActivity
    };
    
    // fomarted data stored in this variable
    const formattedData = {properties: new_properties, tracking_params: new_tracking_params}

    properties.forEach(property => {
        new_properties.push({
           property_id: property.property_id,
           community: property.community,
           address: property.address,
           client_display_flags: property.client_display_flags,
           photos: property.photos,
           prop_type: property.prop_type,
           last_update: property.last_update,
           prop_status: property.prop_status,
        })
    })

    return formattedData // return formatted data
}

// format number
export const formatNumber = (num: number) => {
    return "$" + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const propStatus = (status: string) => {
    if(status === "for_rent") return "For Rent";
    return "For Sale";
}
