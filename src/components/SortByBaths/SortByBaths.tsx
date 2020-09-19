import React, { useState } from 'react'
import ToggleSelectionNumbers from '../ToggleSelectionNumbers/ToggleSelectionNumbers';
import styles from './SortByBaths.module.scss';
const SortByBaths = () => {
    const [value, setValue] = useState<string | null>("0")
    const handleToggleSelection = (e: string) => {
        setValue(e) // set the value we get from our callback
    }
    return (
        <div className={styles.baths}>
            <h4>Sort by baths</h4>
            <ToggleSelectionNumbers min={1} max={5} callback={handleToggleSelection}/>
        </div>
    )
}

export default SortByBaths
