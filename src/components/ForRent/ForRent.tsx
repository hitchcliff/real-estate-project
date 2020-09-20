import React from 'react'
import { rent_propertiesDataFormat } from '../../helpers/rent_format_data';
import { Properties, TrackingParams } from '../../types/ListForRent.types';
import HomesGridDisplay from '../HomesGridDisplay/HomesGridDisplay';
import styles from './ForRent.module.scss'
interface IForRentProp {
    items?: Properties[] 
    tracker?: TrackingParams
}
const ForRent: React.FC<IForRentProp> = (props) => {
    const { items, tracker } = props;
    console.log('For rent loading...')
    const new_items = rent_propertiesDataFormat(items) // format data
    console.log(new_items, tracker)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h2>{tracker?.searchCityState + " Homes for Rent"}</h2>
                    <span>{tracker?.searchResults} Homes</span>
                </div> 
                <div>

                </div>
            </div>
            <HomesGridDisplay/>
        </div>
    )
}

export default ForRent 
