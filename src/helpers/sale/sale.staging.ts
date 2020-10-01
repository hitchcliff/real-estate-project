import { IFilterProp } from '../../Reducers/Filters.reducer';
import { PropertiesSale } from '../../types/Sale.types';

export default class StageSale<TypeOfItem extends PropertiesSale> {
  private items: Array<TypeOfItem>;
  private filters: IFilterProp;

  constructor(items: Array<TypeOfItem>, filters: IFilterProp) {
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
    const items: Array<TypeOfItem> = []; // all filtered items

    for (const prop of this.items) {
      if (
        price.min <= prop.price &&
        price.max >= prop.price &&
        property_type === 'any' &&
        beds >= prop.beds &&
        baths >= prop.baths
      ) {
        items.push(prop);
      } else if (
        property_type === prop.prop_type &&
        price.min <= prop.price &&
        price.max >= prop.price &&
        beds >= prop.beds &&
        baths >= prop.baths
      ) {
        items.push(prop);
      }
    } // end loop

    return items;
  } // end start filter
} // end stage
