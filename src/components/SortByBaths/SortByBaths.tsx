import React from 'react'
import styles from './SortByBaths.module.scss';
const SortByBaths = () => {
    return (
        <div className={styles.baths}>
            <h4>Sort by baths</h4>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5+</li>
            </ul>
        </div>
    )
}

export default SortByBaths
