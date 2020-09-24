import { IFilterProp } from "../Reducers/Filters.reducer";
import { FormattedData, Properties } from "../types/ListForRent.types";

export const parseStrToNum = (value: string) => parseInt(value);
export const filterTimeOut: number = 1000;

export const setPriceInSession = () => {}

// filter data
export const filterData = ({properties, tracking_params}: FormattedData, filters: IFilterProp) => {
    if(!filters && !properties && !tracking_params) return; 

    const { listing } = filters;
    if(!listing) return

    let new_properties: Properties[] = []
    
    // check for listing 
    const startListing = new Listing(properties, listing);
    const firstTest = startListing.listing(); // first test
    new_properties = firstTest; // new properties first

    // start testing
    const start = new Stage(new_properties, filters);
    let finalTest = start.test(); // final test
    return finalTest; // return filtered tests
}

// staging of filters
class Stage {
    private items: Properties[];
    private filters: IFilterProp;

    constructor(items: Properties[], filters: IFilterProp) {
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
        if(!baths || !beds || !listing || !price || !property_type || !size) return;
        if(!price.min || !price.max) return; // check if min and max price existed

        // loop to all items we passed
        let items: Properties[] = []; // all filtered items
        for(let prop of this.items) {
            const {
                prop_type,
                community: {
                    baths_max, beds_max, price_max, price_min, sqft_max, sqft_min, 
                },
                client_display_flags: {
                    is_new_listing
                }
            } = prop

            if ( // check if we prop type is any
                price.min <= price_min && price.max >= price_max && // check price
                beds <= beds_max && // check beds
                baths <= baths_max && // check baths
                property_type === "any" && // check prop type
                size.sqft_min <= sqft_min && size.sqft_max >= sqft_max
            ) {
                items.push(prop)
            } else if ( // check if prop type !== any
                price.min <= price_min && price.max >= price_max && // check price
                beds <= beds_max && // check beds
                baths <= baths_max && // check baths
                property_type === prop_type &&// check prop type
                size.sqft_min <= sqft_min && size.sqft_max >= sqft_max
            ) {
                items.push(prop)
            }  
        } // end loop

        // return the items after filtering
        return items;
    } // end start filter
} // end stage

// listing check
class Listing {
    private items: Properties[]
    private isListing: string;
    constructor(items: Properties[], isListing: string) {
        this.items = items;
        this.isListing = isListing;
    }

    listing() {
       if(this.isListing == "relevant") {
            return this.relevant(); 
       } else if (this.isListing === "new_listing") {
            return this.newListing();
       } else if (this.isListing === "low_to_high") {
           return this.lowToHigh();
       } else if (this.isListing === "high_to_low") {
           return this.highToLow();
       } else {
           return this.items; // default return
       }
    }

    private relevant() {
        // arrange items by default
        return this.items;
    }

    private newListing () {
        let props: Properties[] = []
        for(let prop of this.items) {
            const { client_display_flags: { is_new_listing } } = prop

            if(is_new_listing) {
                props.push(prop);
            }
        }  // end loop
        
        return props; 
    }

    private lowToHigh() {
        // sort array by ascending order
        return this.items.sort((a, b) => {
            return a.community.price_max - b.community.price_max  // price max
        }); 
    }

    private highToLow() {
        // sort array by descing order
        return this.items.sort((a, b) => {
            return b.community.price_max - a.community.price_max
        })
    }

}