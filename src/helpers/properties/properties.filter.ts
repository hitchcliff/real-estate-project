import { IFilterProp } from '../../Reducers/Filters.reducer';
import StageSale from './properties.staging';

export const parseStrToNum = (value: string) => parseInt(value, 0);
export const filterTimeOut = 1000;

export const setPriceInSession = () => {};

// filter data
export const PropertiesFilterData = <T>(
  data: { properties: T[]; meta: any },
  filters: IFilterProp,
) => {
  if (!data) return;

  const { listing } = filters;
  if (!listing) return;

  // check for listing
  const startListing = new ListingSold<T>(data.properties, listing);
  const firstTest = startListing.listing(); // first test

  // // start filtering
  const filtering = new StageSale<T>(firstTest, filters);
  const finalTest = filtering.test(); // final test
  return finalTest; // return filtered tests
};

// listing check
class ListingSold<T> {
  private items: T[] | unknown;
  private isListing: string;
  constructor(items: T[], isListing: string) {
    this.items = items;
    this.isListing = isListing;
  }

  listing() {
    if (this.isListing === 'relevant') {
      return this.relevant();
    } else if (this.isListing === 'new_listing') {
      return this.newListing();
    } else if (this.isListing === 'low_to_high') {
      return this.lowToHigh();
    } else if (this.isListing === 'high_to_low') {
      return this.highToLow();
    } else {
      return this.items; // default return
    }
  }

  private relevant() {
    // arrange items by default
    return this.items;
  }

  private newListing() {
    const props: T[] = [];
    // unknown trick
    if (!Array.isArray(this.items)) return;
    for (const prop of this.items) {
      const {
        client_display_flags: { is_new_listing },
      } = prop;
      if (is_new_listing) {
        props.push(prop);
      }
    } // end loop

    return props;
  }

  private lowToHigh() {
    if (!Array.isArray(this.items)) return;
    // sort array by ascending order
    return this.items.sort((a: any, b: any) => {
      return a.price - b.price; // price max
    });
  }

  private highToLow() {
    if (!Array.isArray(this.items)) return;
    // sort array by descing order
    return this.items.sort((a: any, b: any) => {
      return b.price - a.price;
    });
  }
}
