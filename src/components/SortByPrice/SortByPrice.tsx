import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SortByPrice_action } from '../../Actions/Filters.action';
import { filterTimeOut, parseStrToNum } from '../../helpers/rent/filterRent';
import { Price } from '../../types/Filters.types';
import styles from './SortByPrice.module.scss';
const SortByPrice = () => {
  const [price, setPrice] = useState<Price>({
    min: 1,
    max: 10000000, // 10m
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(SortByPrice_action(price)); // action
    }, filterTimeOut);

    return () => {
      clearTimeout(timer); // clean the timer in 1s if there's new price
    };
  }, [price]); //  run this once we have a state

  // handle setting min price
  const handleSetMinPrice = (e: number) => {
    setPrice({
      min: e,
      max: price.max,
    });
  };

  const handleSetMaxPrice = (e: number) => {
    setPrice({
      min: price.min,
      max: e,
    });
  };

  return (
    <div className={styles.price}>
      <h4>Sort by Price</h4>
      <form>
        <div className={styles.form_group}>
          <span>$</span>
          <input
            type="number"
            placeholder="Min"
            name="min"
            id="searchMin"
            // set the placeholder
            value={price.min === 1 ? '' : price.min} // value min
            // set the price
            onChange={(e) => handleSetMinPrice(parseInt(e.currentTarget.value))}
          />
        </div>
        <div className={styles.form_group}>
          <span>$</span>
          <input
            type="number"
            placeholder="Max"
            name="max"
            id="searchMax"
            // set the placeholder
            value={price.max === 10000000 ? '' : price.max} // value max
            // set the price
            onChange={(e) => handleSetMaxPrice(parseInt(e.currentTarget.value))}
          />
        </div>
      </form>
    </div>
  );
};

export default SortByPrice;
