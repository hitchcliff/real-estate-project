import React, { useState } from 'react'
import ToggleSelectionText from '../ToggleSelectionText/ToggleSelectionText'
import { SortByPropertyTypeContent } from './Content/SortByPropertyType.content'
import styles from './SortByPropertyType.module.scss'

const SortByPropertyType = () => {
    const [value, setValue] = useState<string | "any">("any")
    const handleToggleSelection = (e: string) => {
        setValue(e) // set the value we get from component
    }
    return (
        <div className={styles.property_type}>
            <h4>Sort by property type</h4>
            <ToggleSelectionText defaultChecked="any" items={SortByPropertyTypeContent} callback={handleToggleSelection}/>
        </div>
    )
}

export default SortByPropertyType
