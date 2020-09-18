import React, { useState } from 'react'
import ToggleSelection from '../ToggleSelectionNumbers/ToggleSelectionNumbers'
import styles from './SortByBeds.module.scss'
const SortByBeds = () => {
    const [value, setValue] = useState <string | null >(null) // use state value
    const handleToggleSelection = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const target = e.currentTarget.childNodes[0]; // get the current target child 
        const value: string | null = target.textContent; // get the target content
        setValue(value) // set the value
    }
    return (
        <div className={styles.beds}>
            <h4>Sort by beds</h4>
            <ToggleSelection min={1} max={5} callback={handleToggleSelection}/> 
        </div>
    )
}

export default SortByBeds
