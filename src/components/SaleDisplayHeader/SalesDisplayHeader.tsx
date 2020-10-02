import React from 'react';
import styles from './SalesDisplayHeader.module.scss';
import HomesViewSelection from '../HomesViewSelection/HomesView.selection';
import { TrackingParams } from '../../types';
interface IHomesDisplayHeader<T> {
  tracker?: TrackingParams;
  prop_type?: T;
}
const SalesDisplayHeader = <T,>({
  tracker,
  prop_type,
}: IHomesDisplayHeader<T>) => {
  return (
    <div className={styles.header}>
      <HomesViewSelection />
      <div className={styles.body}>
        <h2>
          {tracker?.searchCityState +
            ` Homes for ${prop_type ? prop_type : 'Sale'}`}
        </h2>
        <span>{tracker?.searchResults} Homes</span>
      </div>
    </div>
  );
};

export default SalesDisplayHeader;
