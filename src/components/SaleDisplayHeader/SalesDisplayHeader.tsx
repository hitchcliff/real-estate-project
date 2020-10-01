import React from 'react';
import styles from './SalesDisplayHeader.module.scss';
import HomesViewSelection from '../HomesViewSelection/HomesView.selection';
import { TrackingParams } from '../../types';
interface IHomesDisplayHeader {
  tracker?: TrackingParams;
}
const SalesDisplayHeader: React.FC<IHomesDisplayHeader> = (props) => {
  const { tracker } = props;

  return (
    <div className={styles.header}>
      <HomesViewSelection />
      <div className={styles.body}>
        <h2>{tracker?.searchCityState + ' Homes for Sale'}</h2>
        <span>{tracker?.searchResults} Homes</span>
      </div>
    </div>
  );
};

export default SalesDisplayHeader;
