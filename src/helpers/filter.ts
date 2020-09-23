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
    const start = new Stage(properties) 
    start.filter(filters);
    start.test();
}

// staging of filters
class Stage {
    private items: any;

    constructor(items: any) {
        this.items = items;
    }

    test() {
        console.log('worked!')
        console.log(this.items)
    }

    filter(model: IFilterProp) {
        const { baths, beds, listing, price, property_type, size } = model
        for(let prop of this.items) {
            const { 
                property_id,
                community: {
                    baths_max, beds_max, price_max, price_min, sqft_max, sqft_min, 
                },
                client_display_flags: {
                    is_new_listing
                }
            } = prop 

            console.log(property_id)
        }

    }

    
}

