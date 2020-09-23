import { IFilterProp } from "../Reducers/Filters.reducer";
import { FormattedData, Properties } from "../types/ListForRent.types";

export const parseStrToNum = (value: string) => parseInt(value);
export const filterTimeOut: number = 1000;

export const setPriceInSession = () => {}

// filter data
export const filterData = ({properties, tracking_params}: FormattedData, filters: IFilterProp) => {
    if(!filters && !properties && !tracking_params) return; 
    const { propertyType } = tracking_params
    let new_properties: Properties[] = []

    // start testing
    const start = new Stage(properties, filters);
    let test = start.test();
    console.log(test)
     
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
        }

        // return the items after filtering
        return items;
    }
}

