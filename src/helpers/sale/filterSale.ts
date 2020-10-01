import { IFilterProp } from '../../Reducers/Filters.reducer';
import { FormattedDataSale, PropertiesSale } from '../../types/Sale.types';
import StageSale from './sale.staging';

export const parseStrToNum = (value: string) => parseInt(value, 0);
export const filterTimeOut = 1000;

export const setPriceInSession = () => {};

// filter data
export const filterDataSale = (
  data: any,
  filters: IFilterProp,
): PropertiesSale[] | undefined => {
  if (!data) return;

  const { listing } = filters;
  if (!listing) return;

  // check for listing
  const startListing = new ListingSale(data.properties, listing);
  const firstTest = startListing.listing(); // first test

  // start filtering
  const start = new StageSale<PropertiesSale>(firstTest, filters);
  const finalTest = start.test(); // final test
  return finalTest; // return filtered tests
};

// listing check
class ListingSale {
  private items: PropertiesSale[];
  private isListing: string;
  constructor(items: PropertiesSale[], isListing: string) {
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
    const props: PropertiesSale[] = [];
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
      return a.price - b.price; // price max
    });
  }

  private highToLow() {
    // sort array by descing order
    return this.items.sort((a, b) => {
      return b.price - a.price;
    });
  }
}
