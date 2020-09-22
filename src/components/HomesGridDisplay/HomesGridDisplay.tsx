import React, { useEffect, useState } from 'react'
import styles from './HomesGridDisplay.module.scss'
import { Properties } from '../../types/ListForRent.types'

// solid
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsAltH, faBed, faBuilding, faBath } from '@fortawesome/free-solid-svg-icons'
import saved from '@fortawesome/free-solid-svg-icons/faHeart';
// regular
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import HomesDisplayCarousel from '../HomesDisplayCarousel/HomesDisplayCarousel'
import Pagination from '../Pagination/Pagination'
import { formatNumber, setClassActive } from '../../helpers/util'

interface IHomesGridDisplayProp {
    items?: Properties[]
}
const HomesGridDisplay: React.FC<IHomesGridDisplayProp> = (props) => {
    const { items } = props
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const lastIndex = currentPage * itemsPerPage; // get the last index
    const firstIndex = lastIndex - itemsPerPage; // get the first index
    if(!items) return null;
    const _items = items.slice(firstIndex, lastIndex); // slice the items
    const totalPagesNumber = Math.ceil(items.length / itemsPerPage);
    
    const handleClickPageNumber = (num: number) => {
        setCurrentPage(num);
    }

    const itemsMapper = _items?.map(item => (
        <div key={item.property_id} className={styles.home}>
            {/* overlay */}
            <div className={styles.home_overlay}>
                  <div className={styles.home_icons}>
                      <ul>
                          <li> <FontAwesomeIcon icon={faArrowsAltH}/> {item.community.sqft_min} sqft. </li>
                          <li> <FontAwesomeIcon icon={faBed}/> {item.community.beds_max} Bed(s) </li>
                      </ul>
                      <ul>
                          <li> <FontAwesomeIcon icon={faBuilding}/> {item.community.sqft_max} sqft. </li>
                          <li> <FontAwesomeIcon icon={faBath}/> {item.community.baths_max} Bath(s) </li>
                      </ul>
                  </div>  
                  <div className={styles.home_button}>
                      <button className="primary-button">
                          <a href="!#">View details</a>
                      </button>
                  </div>
            </div>
             {/* content */}
            <div className={styles.home_showcase}>
                {/* Image */}
                <div className={styles.showcase_image}>
                    <HomesDisplayCarousel images={item.photos} alt={item.address.line}/>
                </div>
               <div className={styles.showcase_header}>
                   {item.client_display_flags.is_new_listing ? <span className={styles.tag}>New</span> : null}
                   <p>{item.address.neighborhood_name} {item.address.line}</p>
               </div> 
               <div className={styles.showcase_footer}>
                   <div>
                        <h4>{formatNumber(item.community.price_min)} - {formatNumber(item.community.price_max)} 
                            <span>/ mo</span>
                        </h4>
                   </div>
                   <FontAwesomeIcon icon={faHeart}/>
               </div>
            </div>
            
        </div>
    ))
    return (
        <div className={styles.container}>
            <div className={styles.home_container}>
                {itemsMapper}
            </div>
            <Pagination number={totalPagesNumber} callback={handleClickPageNumber}/>
        </div>
    )
}

export default HomesGridDisplay