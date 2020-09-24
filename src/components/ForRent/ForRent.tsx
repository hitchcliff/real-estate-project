import React from 'react'
import { rent_propertiesDataFormat } from '../../helpers/rent_format_data';
import { Properties, TrackingParams } from '../../types/ListForRent.types';
import HomesGridDisplay from '../HomesGridDisplay/HomesGridDisplay';
import styles from './ForRent.module.scss'

// icons
import HomesDisplayHeader from '../HomesDisplayHeader/HomesDisplayHeader';
import HomesListDisplay from '../HomesListDisplay/HomesListDisplay';
import HomesDisplayMap from '../HomesDisplayMap/HomesDisplayMap';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';

interface IForRentProp {
    items?: Properties[] 
    tracker?: TrackingParams
}
const ForRent: React.FC<IForRentProp> = (props) => {
    const { items, tracker } = props;
    const view = useSelector((state: RootStore) => state.view)
    const new_items = rent_propertiesDataFormat(items) // format data

    return (
        <div className={styles.container}>
            {/* Display Header */}
            <HomesDisplayHeader tracker={tracker}/>

            <div className={view ? styles.view : styles.default}>
                {/* Grid Display */}
                <HomesGridDisplay items={new_items}/>
            </div>
            <div className={!view ? styles.view : styles.default}>
                {/* List Display */}
                <HomesListDisplay items={new_items}/>
                {/* Map */}
                <HomesDisplayMap/> 
            </div>
        </div>
    )
}

export default ForRent 
