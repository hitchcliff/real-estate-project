import React from 'react'
import styles from './HomesDisplayHeader.module.scss'
import { TrackingParams } from '../../types/ListForRent.types'
import HomesViewSelection from '../HomesViewSelection/HomesView.selection'
interface IHomesDisplayHeader {
    tracker?: TrackingParams
}
const HomesDisplayHeader: React.FC<IHomesDisplayHeader> = (props) => {
    const { tracker } = props;

    return (
        <div className={styles.header}>
            <div>
                <h2>{tracker?.searchCityState + " Homes for Rent"}</h2>
                <span>{tracker?.searchResults} Homes</span>
            </div> 
            <HomesViewSelection/> 
        </div>
    )
}

export default HomesDisplayHeader
