import React from 'react'
import ToggleSelectionFaIcons from '../ToggleSelectionFaIcons/ToggleSelectionFaIcons'
import styles from './HomesDisplayHeader.module.scss'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import { faThList } from '@fortawesome/free-solid-svg-icons'
import { TrackingParams } from '../../types/ListForRent.types'
interface IHomesDisplayHeader {
    tracker?: TrackingParams
}
const HomesDisplayHeader: React.FC<IHomesDisplayHeader> = (props) => {
    const { tracker } = props;
    const handleToggleSelectionIcons = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        console.log(e)
    }
    return (
        <div className={styles.header}>
            <div>
                <h2>{tracker?.searchCityState + " Homes for Rent"}</h2>
                <span>{tracker?.searchResults} Homes</span>
            </div> 
            <div className={styles.display}>
                <ToggleSelectionFaIcons callback={handleToggleSelectionIcons} icons={[faThList, faThLarge]}/>
            </div>
        </div>
    )
}

export default HomesDisplayHeader
