import React from 'react'
import { rent_propertiesDataFormat } from '../../helpers/rent_format_data';
import { Properties, TrackingParams } from '../../types/ListForRent.types';
import HomesGridDisplay from '../HomesGridDisplay/HomesGridDisplay';
import styles from './ForRent.module.scss'

// icons
import HomesDisplayHeader from '../HomesDisplayHeader/HomesDisplayHeader';

interface IForRentProp {
    items?: Properties[] 
    tracker?: TrackingParams
}
const ForRent: React.FC<IForRentProp> = (props) => {
    const { items, tracker } = props;
    const new_items = rent_propertiesDataFormat(items) // format data
    console.log(new_items, tracker)
    
    return (
        <div className={styles.container}>
            {/* Display Header */}
            <HomesDisplayHeader tracker={tracker}/>
            {/* Grid Display */}
            <HomesGridDisplay/>
            {/* List Display */}
        </div>
    )
}

export default ForRent 
