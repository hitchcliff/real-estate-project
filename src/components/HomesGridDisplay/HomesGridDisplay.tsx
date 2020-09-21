import React from 'react'
import styles from './HomesGridDisplay.module.scss'
import { Properties } from '../../types/ListForRent.types'

// solid
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsAltH, faBed, faBuilding, faBath } from '@fortawesome/free-solid-svg-icons'
import saved from '@fortawesome/free-solid-svg-icons/faHeart';
// regular
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import HomesDisplayCarousel from '../HomesDisplayCarousel/HomesDisplayCarousel'

interface IHomesGridDisplayProp {
    items?: Properties[]
}
const HomesGridDisplay: React.FC<IHomesGridDisplayProp> = (props) => {
    const { items } = props
    const _items = items?.slice(0, 12);
    console.log(_items)
    const itemsMapper = items?.map(item => (
        <div key={item.property_id} className={styles.home}>
            {/* overlay */}
            <div className={styles.home_overlay}>
                  <div className={styles.home_icons}>
                      <ul>
                          <li>
                            <FontAwesomeIcon icon={faArrowsAltH}/>
                            {item.community.sqft_min} sqft. 
                          </li>
                          <li>
                              <FontAwesomeIcon icon={faBed}/>
                              {item.community.beds_max} Bed(s)
                          </li>
                      </ul>
                      <ul>
                          <li>
                              <FontAwesomeIcon icon={faBuilding}/>
                              {item.community.sqft_max} sqft.
                         </li>
                          <li>
                              <FontAwesomeIcon icon={faBath}/>
                              {item.community.baths_max} Bath(s)
                          </li>
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
                   <p>{item.address.neighborhood_name}, {item.address.line}</p>
               </div> 
               <div className={styles.showcase_footer}>
                   <div>
                        <h4>${item.community.price_min} - ${item.community.price_max} 
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
            {itemsMapper}
        </div>
    )
}

export default HomesGridDisplay
