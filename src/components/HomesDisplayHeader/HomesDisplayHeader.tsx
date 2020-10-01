import React from 'react';
import styles from './HomesDisplayHeader.module.scss';
import HomesViewSelection from '../HomesViewSelection/HomesView.selection';
import { TrackingParams } from '../../types';
interface IHomesDisplayHeader {
  tracker?: TrackingParams;
}
const HomesDisplayHeader: React.FC<IHomesDisplayHeader> = (props) => {
  const { tracker } = props;

  return (
    <div className={styles.header}>
      <HomesViewSelection />
      <div className={styles.body}>
        <h2>{tracker?.searchCityState + ' Homes for Rent'}</h2>
        <span>{tracker?.searchResults} Homes</span>
      </div>
    </div>
  );
};

export default HomesDisplayHeader;
