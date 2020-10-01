import React, { useEffect, useState } from 'react';
import styles from './ForSale.module.scss';
import cx from 'classnames';

// components
import SaleGridDisplay from '../SaleGridDisplay/SaleGridDisplay';
import Filter from '../Filter/Filter';

// state
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { PropertiesAction } from '../../Actions/Properties.action';

// helpers
import { PropertiesSale, ResultSale } from '../../types/Sale.types';
import { filterDataSale } from '../../helpers/sale/filterSale';
import SalesDisplayHeader from '../SaleDisplayHeader/SalesDisplayHeader';

const ForSale = () => {
  const dispatch = useDispatch();

  // current data from api [1]
  const { loading, data } = useSelector((state: RootStore) => state.properties);

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
  }, []);

  // filter the data [3]
  useEffect(() => {
    const finalResults = filterDataSale(data, filters);

    if (!finalResults) return;
    setResults(finalResults);
  }, [filters]);

  const view = useSelector((state: RootStore) => state.view); // current view [list, grid]
  // const address = getAddress2<PropertiesSale>(results); // format address for map

  console.log(results);
  return (
    <div className={styles.container}>
      {/* Display Header */}
      <SalesDisplayHeader tracker={data?.meta.tracking_params} />
      <div className={view ? cx(styles.view, styles.grid) : styles.default}>
        {/* Filters */}
        <Filter filter={data?.tracking_params} />
        <div className={styles.grid_container}>
          {/* Grid Display */}
          <SaleGridDisplay items={results} />
        </div>
      </div>
    </div>
  );
};

export default ForSale;
