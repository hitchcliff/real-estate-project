import { IFilterProp } from '../../Reducers/Filters.reducer';
import { PropertiesRent } from '../../types/Rent.types';

export default class StageRent {
  private items: PropertiesRent[];
  private filters: IFilterProp;

  constructor(items: PropertiesRent[], filters: IFilterProp) {
    this.items = items;
    this.filters = filters;
  }

  test() {
    return this.startFilter();
  }

  private startFilter() {
    // filters
    const { baths, beds, listing, price, property_type, size } = this.filters;

    // check if we have these data
    if (!baths || !beds || !listing || !price || !property_type || !size) return;
    if (!price.min || !price.max || price.min === NaN || price.max === NaN) return; // check if min and max price existed

    // loop to all items we passed
    const items: PropertiesRent[] = []; // all filtered items
    for (const prop of this.items) {
      const {
        prop_type,
        community: { baths_max, beds_max, price_max, price_min, sqft_max, sqft_min },
      } = prop;

      if (
        // check if we prop type is any
        price.min <= price_min &&
        price.max >= price_max && // check price
        beds <= beds_max && // check beds
        baths <= baths_max && // check baths
        property_type === 'any' && // check prop type
        size.sqft_min <= sqft_min &&
        size.sqft_max >= sqft_max
      ) {
        items.push(prop);
      } else if (
        // check if prop type !== any
        price.min <= price_min &&
        price.max >= price_max && // check price
        beds <= beds_max && // check beds
        baths <= baths_max && // check baths
        property_type === prop_type && // check prop type
        size.sqft_min <= sqft_min &&
        size.sqft_max >= sqft_max
      ) {
        items.push(prop);
      }
    } // end loop

    // return the items after filtering
    return items;
  } // end start filter
} // end stage
