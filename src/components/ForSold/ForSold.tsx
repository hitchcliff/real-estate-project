import React, { useEffect, useState } from 'react';
import styles from './ForSold.module.scss';
import cx from 'classnames';

// components
import PropertyGridDisplay from '../PropertyGridDisplay/PropertyGridDisplay';
import Filter from '../Filter/Filter';
import SalesDisplayHeader from '../SaleDisplayHeader/SalesDisplayHeader';
import PropertyDisplayMap from '../PropertyDisplayMap/PropertyDisplayMap';

// state
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { PropertiesAction } from '../../Actions/Properties.action';

// helpers
import { PropertiesSale } from '../../types/Sale.types';
import { filterDataSale } from '../../helpers/sale/filterSale';
import SaleListDisplay from '../SaleListDisplay/SaleListDisplay';
import { getAddress2 } from '../../helpers/map.address';
import { PropertiesSold, SoldPhotos } from '../../types/Sold.types';
import { PropertiesFilterData } from '../../helpers/properties/properties.filter';

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
  // const address = getAddress2<PropertiesSale>(results); // format address for map

  return (
    <div className={styles.container}>
      {/* Display Header */}
      <SalesDisplayHeader<string>
        prop_type="not for Sale"
        tracker={data?.meta.tracking_params}
      />
      <div className={view ? cx(styles.view, styles.grid) : styles.default}>
        {/* Filters */}
        <Filter filter={data?.tracking_params} />
        <div className={styles.grid_container}>
          {/* Grid Display */}
          <PropertyGridDisplay<PropertiesSold, SoldPhotos> items={results} />
        </div>
      </div>
      <div
        className={
          !view ? cx(styles.view, styles.list, 'list') : styles.default
        }
      >
        <div className={styles.list_container}>
          {/* List Display */}
          <SaleListDisplay items={results} />
          {/* Map Display */}
          <div className="sticky">
            {/* <PropertyDisplayMap address={address} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForSold;
