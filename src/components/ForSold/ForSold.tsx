import React, { useEffect, useState } from 'react';
import styles from './ForSold.module.scss';
import cx from 'classnames';

// components
import PropertyGridDisplay from '../PropertyGridDisplay/PropertyGridDisplay';
import Filter from '../Filter/Filter';
import PropertyDisplayHeader from '../PropertyDisplayHeader/PropertyDisplayHeader';
import PropertyDisplayMap from '../PropertyDisplayMap/PropertyDisplayMap';
import PropertyListDisplay from '../PropertyListDisplay/PropertyListDisplay';

// state
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { PropertiesAction } from '../../Actions/Properties.action';

// helpers
import { PropertiesSold, SoldPhotos } from '../../types/Sold.types';
import { PropertiesFilterData } from '../../helpers/properties/properties.filter';

// types
import { TrackingParams } from '../../types';
import { getPropertyAddress } from '../../helpers/map.address';
import HomesViewSelection from '../HomesViewSelection/HomesView.selection';

const ForSold = () => {
  const dispatch = useDispatch();

  // current data from api [1]
  const { loading, data } = useSelector((state: RootStore) => state.properties);

  // final and filtered results will be used in components rent
  const [results, setResults] = useState<PropertiesSold[]>([]);

  // get filters from reducer
  const filters = useSelector((state: RootStore) => state.filters); // get the state

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(PropertiesAction('list_for_sold')); // call the action to fetch
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // filter the data [3]
  useEffect(() => {
    const finalResults = PropertiesFilterData<PropertiesSold>(data, filters);

    if (!finalResults) return;
    setResults(finalResults);
  }, [filters]);

  const view = useSelector((state: RootStore) => state.view); // current view [list, grid]
  const address = getPropertyAddress<PropertiesSold>(results); // format address for map

  return (
    <div className={styles.container}>
      <HomesViewSelection />
      <div className={view ? cx(styles.view, styles.grid) : styles.default}>
        {/* Filters */}
        <Filter filter={data?.tracking_params} />
        <div className={styles.grid_container}>
          {/* Display Header */}
          <PropertyDisplayHeader<TrackingParams, string>
            prop_type="not for Sale"
            tracker={data?.meta.tracking_params}
          />
          {/* Grid Display */}
          <PropertyGridDisplay<PropertiesSold, SoldPhotos> items={results} />
        </div>
      </div>
      <div
        className={
          !view ? cx(styles.view, styles.list, 'list') : styles.default
        }
      >
        {/* Display Header */}
        <PropertyDisplayHeader<TrackingParams, string>
          prop_type="not for Sale"
          tracker={data?.meta.tracking_params}
        />
        <div className={styles.list_container}>
          {/* List Display */}
          <PropertyListDisplay<PropertiesSold> items={results} />
          {/* Map Display */}
          <div className="sticky">
            <PropertyDisplayMap<string> types="sold" address={address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForSold;
