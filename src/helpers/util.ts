import { TrackingParams } from '../types';
import { FormattedDataRent, PropertiesRent, ResultRent } from '../types/Rent.types';

export const getAccordionActiveItem = (items: NodeListOf<Element>) => {
  const result = [];
  let activeItem = 0;
  for (let i = 0; i < items.length; i++) {
    result[i] = items[i].getAttribute('aria-expanded') === 'true'; // get attributes
    items[i].classList.remove('active'); // remove active
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === true) {
      activeItem = i; // set current index of the active item
    }
  }

  return activeItem; // return the index
};

export const setClassActive = (index: number, item: NodeListOf<Element>) => {
  if (!item.length) return; // if its undefined, simply return
  item[index].classList.add('active'); // add class to the button
};

// First Data Format for Rent
export const formatDataRent = (
  data: ResultRent | undefined,
): FormattedDataRent | undefined => {
  if (!data) return; // return if data doesn't exist
  const {
    meta: { tracking_params },
    properties,
  } = data;
  const new_properties: PropertiesRent[] = []; // new properties stored
  const new_tracking_params: TrackingParams = {
    // new tracking_params store
    channel: tracking_params.channel,
    searchCityState: tracking_params.searchCityState,
    searchMinPrice: tracking_params.searchMinPrice,
    searchMaxPrice: tracking_params.searchMaxPrice,
    propertyType: tracking_params.propertyType,
    searchBedroom: tracking_params.searchBedroom,
    searchBathRoom: tracking_params.searchBathRoom,
    searchResults: tracking_params.searchResults,
    listingActivity: tracking_params.listingActivity,
  };

  // fomarted data stored in this variable
  const formattedData = {
    properties: new_properties,
    tracking_params: new_tracking_params,
  };

  properties.forEach((property) => {
    new_properties.push({
      property_id: property.property_id,
      community: property.community,
      address: property.address,
      client_display_flags: property.client_display_flags,
      photos: property.photos,
      prop_type: property.prop_type,
      last_update: property.last_update,
      prop_status: property.prop_status,
    });
  });

  return formattedData; // return formatted data
};

// format number 3000 to 3,000
export const formatNumber = (num: number) => {
  return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

// format number with 3000 to 3.0k
export const formatNumber2 = (num: number) => {
  if (num >= 1000000000) {
    return '$' + (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return '$' + (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return '$' + (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return '$' + num;
};

// get prop-status
export const propStatus = (status: string) => {
  if (status === 'for_rent') return 'For Rent';
  else if (status === 'not_for_sale') return 'Sold';
  return 'For Sale';
};

// format number est per month
export const formatNumberEstPerMonth = <T>(value: T): string => {
  if (typeof value === 'string') {
    const parsed = parseInt(value, 10) / 12;
    return formatNumber2(parsed);
  } else if (typeof value === 'number') {
    return formatNumber2(value / 12);
  }
  return 'No price';
};

// set item in local storage
export const setItemLocalStorage = <T, T2>(item: T, property_id: T2): void => {
  const parseString = JSON.stringify(item);
  if (typeof property_id === 'number') {
    const parsedID = property_id.toString();
    localStorage.setItem('Property ' + parsedID, parseString);

    // save a state
    setSavedStateLocalStorage(parsedID);
  } else if (typeof property_id === 'string') {
    localStorage.setItem('Property ' + property_id, parseString);

    // state a state
    setSavedStateLocalStorage(property_id);
  } else {
    console.log('error saving... Property: ', property_id);
  }
};

// remove item in local storage
export const removeItemLocalStorage = <K>(key: K): void => {
  if (typeof key !== 'string') return;
  localStorage.removeItem('Property ' + key);

  // remove the state which id contains
  localStorage.removeItem('State ' + key);
};

// save the state
export const setSavedStateLocalStorage = (id: string) => {
  localStorage.setItem('State ' + id, id);
};

// ge the state
export const getSavedStateLocalStorage = <T>(id: T) => {
  if (typeof id !== 'string') return;
  return localStorage.getItem('State ' + id);
};
