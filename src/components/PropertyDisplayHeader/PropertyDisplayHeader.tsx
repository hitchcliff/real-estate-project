import React from 'react';
import styles from './PropertyDisplayHeader.module.scss';
import HomesViewSelection from '../HomesViewSelection/HomesView.selection';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';
interface IPropertyDisplayHeader<T, T2> {
  tracker: T | unknown;
  prop_type: T2;
}
const HomesDisplayHeader = <T, T2>(
  props: IPropertyDisplayHeader<T, T2>,
): JSX.Element => {
  const { tracker, prop_type } = props;

  if (!tracker) return <></>;
  const { searchCityState, searchResults }: any = tracker;

  return (
    <div className={styles.header}>
      <HomesViewSelection />
      <div className={styles.body}>
        <h2>
          {searchCityState ? searchCityState + ` Homes ${prop_type}` : null}
        </h2>
        <span>{searchResults} Homes</span>
      </div>
    </div>
  );
};

export default HomesDisplayHeader;
