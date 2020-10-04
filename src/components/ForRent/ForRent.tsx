import React, { useEffect, useState } from 'react';
import styles from './ForRent.module.scss';
import cx from 'classnames';

// components
import HomesGridDisplay from '../HomesGridDisplay/HomesGridDisplay';
import HomesListDisplay from '../HomesListDisplay/HomesListDisplay';
import Filter from '../Filter/Filter';
import PropertyDisplayMap from '../PropertyDisplayMap/PropertyDisplayMap';
import PropertyDisplayHeader from '../PropertyDisplayHeader/PropertyDisplayHeader';

// state
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { PropertiesAction } from '../../Actions/Properties.action';

// helpers
import { getAddress } from '../../helpers/map.address';
import { filterData, filterTimeOut } from '../../helpers/rent/filterRent';
import { rent_propertiesDataFormat } from '../../helpers/rent/rent_format_data';
import { formatDataRent } from '../../helpers/util';

// types
import { PropertiesRent } from '../../types/Rent.types';
import { TrackingParams } from '../../types';
import HomesViewSelection from '../HomesViewSelection/HomesView.selection';

const ForRent = () => {
  const dispatch = useDispatch();
  // view
  const view = useSelector((state: RootStore) => state.view); // current view [list, grid]

  // current data from api [1]
  const { data } = useSelector((state: RootStore) => state.properties);

  // final and filtered results will be used in components rent
  const [results, setResults] = useState<PropertiesRent[]>([]);

  // get filters from reducer
  const filters = useSelector((state: RootStore) => state.filters); // get the state

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(PropertiesAction('list_for_rent')); // call the action to fetch
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // current data from api format [2]
  const new_data = formatDataRent(data); // format data

  // filter the data [3]
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!new_data) return;
      const finalResults = filterData(new_data, filters);

      if (!finalResults) return;
      setResults(finalResults);
    }, filterTimeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [filters]);

  const new_items = rent_propertiesDataFormat(results); // format data for homes
  const address = getAddress<PropertiesRent>(results); // format address for map

  return (
    <div className={styles.container}>
      <HomesViewSelection />
      <div className={view ? cx(styles.view, styles.grid) : styles.default}>
        {/* Filters */}
        <Filter filter={new_data?.tracking_params} />
        <div className={styles.grid_container}>
          {/* Display Header */}
          <PropertyDisplayHeader<TrackingParams, string>
            prop_type="for Rent"
            tracker={data?.meta.tracking_params}
          />
          {/* Grid Display */}
          <HomesGridDisplay items={new_items} />
        </div>
      </div>
      <div className={!view ? cx(styles.view, styles.list, 'list') : styles.default}>
        {/* Display Header */}
        <PropertyDisplayHeader<TrackingParams, string>
          prop_type="for Rent"
          tracker={data?.meta.tracking_params}
        />
        <div className={styles.list_container}>
          {/* List Display */}
          <HomesListDisplay items={new_items} />
          {/* Map Display */}
          <div className="sticky">
            <PropertyDisplayMap address={address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForRent;
