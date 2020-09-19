import React, { useState } from 'react'
import ToggleSelection from '../ToggleSelectionNumbers/ToggleSelectionNumbers'
import styles from './SortByBeds.module.scss'
const SortByBeds = () => {
    const [value, setValue] = useState <string | null >(null) // use state value
    const handleToggleSelection = (e: string) => { //callback function
        setValue(e) // set the value
    }
    return (
        <div className={styles.beds}>
            <h4>Sort by beds</h4>
            <ToggleSelection min={1} max={5} callback={handleToggleSelection}/> 
        </div>
    )
}

export default SortByBeds
