import React from 'react'
import styles from './SortByPrice.module.scss'
const SortByPrice = () => {
    return (
        <div className={styles.price}>
               <h4>Sort by Price</h4>
               <form>
                   <div className={styles.form_group}>
                       <span>$</span>
                       <input type="number" placeholder="Min" name="min" id="searchMin"/>
                   </div>
                   <div className={styles.form_group}>
                       <span>$</span>
                       <input type="number" placeholder="Max" name="max" id="searchMax"/>
                   </div>
               </form>
           </div>
    )
}

export default SortByPrice
