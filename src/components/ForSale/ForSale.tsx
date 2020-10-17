import React, { useEffect, useState } from 'react';
import styles from './ForSale.module.scss';
import cx from 'classnames';

// components
import PropertyDisplayHeader from '../PropertyDisplayHeader/PropertyDisplayHeader';
import PropertyDisplayMap from '../PropertyDisplayMap/PropertyDisplayMap';
import PropertyListDisplay from '../PropertyListDisplay/PropertyListDisplay';
import PropertyGridDisplay from '../PropertyGridDisplay/PropertyGridDisplay';
import Filter from '../Filter/Filter';

// state
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { PropertiesAction } from '../../Actions/Properties.action';

// helpers
import { PropertiesSale } from '../../types/Sale.types';
import { filterDataSale } from '../../helpers/sale/filterSale';
import { getPropertyAddress } from '../../helpers/map.address';

// types
import { TrackingParams } from '../../types';
import HomesViewSelection from '../HomesViewSelection/HomesView.selection';

const ForSale = () => {
  const dispatch = useDispatch();

  // current data from api [1]
  const { data, loading } = useSelector((state: RootStore) => state.properties);

  // final and filtered results will be used in components rent
  const [results, setResults] = useState<PropertiesSale[]>([]);

  // get filters from reducer
  const filters = useSelector((state: RootStore) => state.filters); // get the state

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(PropertiesAction('list_for_sale')); // call the action to fetch
    });

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  // filter the data [3]
  useEffect(() => {
    const finalResults = filterDataSale(data, filters);

    if (!finalResults) return;
    setResults(finalResults);
  }, [filters]);

  const view = useSelector((state: RootStore) => state.view); // current view [list, grid]
  const address = getPropertyAddress<PropertiesSale>(results); // format address for map

  if (loading) return <></>;
  return (
    <div className={styles.container}>
      <HomesViewSelection />
      <div className={view ? cx(styles.view, styles.grid) : styles.default}>
        {/* Filters */}
        <div className={styles.filter_container}>
          <Filter filter={data?.tracking_params} />
        </div>
        <div className={styles.grid_container}>
          {/* Display Header */}
          <PropertyDisplayHeader<TrackingParams, string>
            prop_type="For Sale"
            tracker={data?.meta.tracking_params}
          />
          {/* Grid Display */}
          <PropertyGridDisplay<PropertiesSale, string>
            items={results}
            itemPerPage={12}
            pagination={true}
            isGrid={false}
          />
        </div>
      </div>

      <div className={!view ? cx(styles.view, styles.list, 'list') : styles.default}>
        {/* Display Header */}
        <PropertyDisplayHeader<TrackingParams, string>
          prop_type="For Sale"
          tracker={data?.meta.tracking_params}
        />
        <div className={styles.list_container}>
          {/* List Display */}
          <PropertyListDisplay<PropertiesSale> items={results} />
          {/* Map Display */}
          <div className="sticky">
            <PropertyDisplayMap address={address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForSale;
