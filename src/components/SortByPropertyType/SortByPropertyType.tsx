import React from 'react'
import styles from './SortByPropertyType.module.scss'

const SortByPropertyType = () => {
    return (
        <div className={styles.property_type}>
            <h4>Sort by property type</h4>
            <ul>
                <li className={styles.active}>any</li>
                <li><span>single family</span></li>
                <li>condo</li>
                <li>townhomes</li>
                <li>multi family</li>
                <li>mobile</li>
                <li>farm</li>
                <li>land</li>
            </ul>
        </div>
    )
}

export default SortByPropertyType
