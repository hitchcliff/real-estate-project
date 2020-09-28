import { IFilterProp } from '../Reducers/Filters.reducer';
import { FormattedData, Properties } from '../types/ListForRent.types';
import Stage from './staging';

export const parseStrToNum = (value: string) => parseInt(value, 0);
export const filterTimeOut = 1000;

export const setPriceInSession = () => {};

// filter data
export const filterData = (
  { properties, tracking_params }: FormattedData,
  filters: IFilterProp,
) => {
  if (!filters && !properties && !tracking_params) return;

  const { listing } = filters;
  if (!listing) return;

  let new_properties: Properties[] = [];

  // check for listing
  const startListing = new Listing(properties, listing);
  const firstTest = startListing.listing(); // first test
  new_properties = firstTest; // new properties first

  // start testing
  const start = new Stage(new_properties, filters);
  const finalTest = start.test(); // final test
  return finalTest; // return filtered tests
};

// staging of filters

// listing check
class Listing {
  private items: Properties[];
  private isListing: string;
  constructor(items: Properties[], isListing: string) {
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
    const props: Properties[] = [];
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
    // sort array by ascending order
    return this.items.sort((a, b) => {
      return a.community.price_max - b.community.price_max; // price max
    });
  }

  private highToLow() {
    // sort array by descing order
    return this.items.sort((a, b) => {
      return b.community.price_max - a.community.price_max;
    });
  }
}
