import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SortByBaths_action } from '../../Actions/Filters.action';
import { parseStrToNum } from '../../helpers/rent/filterRent';
import ToggleSelectionNumbers from '../ToggleSelectionNumbers/ToggleSelectionNumbers';
import styles from './SortByBaths.module.scss';
const SortByBaths = () => {
  const [value, setValue] = useState<number>(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(SortByBaths_action(value));
    });
    return () => {
      clearTimeout(timer);
    };
  }, [value, dispatch]);

  const handleToggleSelection = (e: string) => {
    const targetValue = parseStrToNum(e);
    setValue(targetValue); // set the value we get from our callback
  };
  return (
    <div className={styles.baths}>
      <h4>Sort by baths</h4>
      <ToggleSelectionNumbers min={1} max={5} callback={handleToggleSelection} />
    </div>
  );
};

export default SortByBaths;
