import { IFilterProp } from '../../Reducers/Filters.reducer';

export default class PropertiesStaging<TypeOfItem> {
  private items: TypeOfItem | unknown;
  private filters: IFilterProp;

  constructor(items: Array<TypeOfItem> | unknown, filters: IFilterProp) {
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
    if (!baths || !beds || !listing || !price || !property_type || !size)
      return;
    if (!price.min || !price.max) return; // check if min and max price existed
    if (!size.sqft_min && !size.sqft_max) return;

    // loop to all items we passed

    const haveSize: Array<TypeOfItem> = []; // all filtered items
    const noSize: Array<TypeOfItem> = []; // collecdtion of no lot and building sizes
    const merged: Array<TypeOfItem> = [];

    if (!Array.isArray(this.items)) return;

    for (const prop of this.items) {
      if (!prop.lot_size || !prop.building_size) {
        noSize.push(prop);
        merged.push(prop);
      } else if (
        property_type === 'any' &&
        price.min <= prop.price &&
        price.max >= prop.price &&
        beds <= prop.beds &&
        baths <= prop.baths &&
        size.sqft_max >= prop.lot_size.size &&
        size.sqft_min <= prop.lot_size.size
      ) {
        haveSize.push(prop);
        merged.push(prop);
      } else if (
        property_type === prop.prop_type &&
        price.min <= prop.price &&
        price.max >= prop.price &&
        beds <= prop.beds &&
        baths <= prop.baths &&
        size.sqft_max >= prop.lot_size.size &&
        size.sqft_min <= prop.lot_size.size
      ) {
        haveSize.push(prop);
        merged.push(prop);
      }
    } // end loop
    return merged;
  } // end start filter
} // end stage
