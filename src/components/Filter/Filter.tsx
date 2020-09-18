import React, { useEffect, useState } from 'react'
import styles from './Filter.module.scss';
import SortByPrice from '../SortByPrice/SortByPrice';
import SortByPropertyType from '../SortByPropertyType/SortByPropertyType';
import SortByBeds from '../SortByBeds/SortByBeds';
import SortByBaths from '../SortByBaths/SortByBaths';
import AccordionList from '../AccordionList/AccordionList';

const Filter = () => {
    
    return (
        <div className={styles.container}>
           <div className={styles.header}>
                <h2>Filters</h2>
                <div>
                    <button className="recent-search">
                        Recent search
                    </button>
                </div>
           </div> 
           <SortByPrice/> 
           <SortByPropertyType/>
           <SortByBeds/>
           <SortByBaths/>
           <AccordionList/>
        </div>
    )
}

export default Filter
