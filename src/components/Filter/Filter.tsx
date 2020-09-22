import React, { ReactElement, useEffect, useState } from 'react'
import styles from './Filter.module.scss';
import SortByPrice from '../SortByPrice/SortByPrice';
import SortByPropertyType from '../SortByPropertyType/SortByPropertyType';
import SortByBeds from '../SortByBeds/SortByBeds';
import SortByBaths from '../SortByBaths/SortByBaths';
import AccordionList from '../AccordionList/AccordionList';
import { TrackingParams } from '../../types/ListForRent.types';
interface IFilterProp {
    filter: TrackingParams
}
const Filter: React.FC<IFilterProp> = (props): ReactElement=> {
    const tracking_params = props; 

    if(!tracking_params) return <></>;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h2>Filters</h2>
                    <div>
                        <button className="recent-search">
                            Recent search
                        </button>
                    </div>
                </div>
           </div> 
           <div className={styles.filters}>
                <SortByPrice/> 
                <SortByPropertyType/>
                <SortByBeds/>
                <SortByBaths/>
                <AccordionList/>
                <div className={styles.button}>
                    <button className="search-button">
                        <a href="http://google.com">Search</a>
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Filter
