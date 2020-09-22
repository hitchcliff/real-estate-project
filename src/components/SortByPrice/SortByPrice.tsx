import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SortByPrice_action } from '../../Actions/Filters.action'
import { parseStrToNum } from '../../helpers/filter'
import { Price } from '../../types/Filters.types'
import styles from './SortByPrice.module.scss'
const SortByPrice = () => {
    const [minPrice, setMinPrice] = useState<Price["min"]>(0) // 0
    const [maxPrice, setMaxPrice] = useState<Price["max"]>(10000000) //10m
    
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(SortByPrice_action(minPrice, maxPrice)); // action 
        }, 1000);

        return() => {
            clearTimeout(timer); // clean the timer in 1s if there's new price
        }
    }, [minPrice, maxPrice]) //  run this once we have a state

    return (
        <div className={styles.price}>
               <h4>Sort by Price</h4>
               <form>
                   <div className={styles.form_group}>
                       <span>$</span>
                       <input type="number" placeholder="Min" name="min" id="searchMin"
                            // set the placeholder
                            value={minPrice === 0 ? "min" : minPrice}  // value min
                            onChange={e=> setMinPrice(parseStrToNum(e.currentTarget.value))}
                       />
                   </div>
                   <div className={styles.form_group}>
                       <span>$</span>
                       <input type="number" placeholder="Max" name="max" id="searchMax"
                            // set the placeholder
                            value={maxPrice === 10000000 ? "max" : maxPrice} // value max 
                            onChange={e=> setMaxPrice(parseStrToNum(e.currentTarget.value))}
                       />
                   </div>
               </form>
           </div>
    )
}

export default SortByPrice
