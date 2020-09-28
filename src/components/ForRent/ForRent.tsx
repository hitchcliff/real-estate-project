import React from 'react';
import { rent_propertiesDataFormat } from '../../helpers/rent_format_data';
import { TrackingParams } from '../../types/ListForRent.types';
import HomesGridDisplay from '../HomesGridDisplay/HomesGridDisplay';
import styles from './ForRent.module.scss';
import cx from 'classnames';

// icons
import HomesDisplayHeader from '../HomesDisplayHeader/HomesDisplayHeader';
import HomesListDisplay from '../HomesListDisplay/HomesListDisplay';
import HomesDisplayMap from '../HomesDisplayMap/HomesDisplayMap';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import Filter from '../Filter/Filter';
import { getAddress } from '../../helpers/map.address';
import { MapAndProperty } from '../../types';

interface IForRentProp {
  items: MapAndProperty[];
  tracker: TrackingParams;
}
const ForRent: React.FC<IForRentProp> = (props) => {
  const { items, tracker } = props;
  const view = useSelector((state: RootStore) => state.view);
  const new_items = rent_propertiesDataFormat(items); // format data for homes
  const address = getAddress(items); // format address for map

  if (!new_items || !address) return <></>;

  return (
    <div className={styles.container}>
      <div className={view ? cx(styles.view, styles.grid) : styles.default}>
        {/* Filters */}
        <Filter filter={tracker} />
        <div className={styles.grid_container}>
          {/* Display Header */}
          <HomesDisplayHeader tracker={tracker} />
          {/* Grid Display */}
          <HomesGridDisplay items={new_items} />
        </div>
      </div>
      <div
        className={
          !view ? cx(styles.view, styles.list, 'list') : styles.default
        }
      >
        {/* Display Header */}
        <HomesDisplayHeader tracker={tracker} />
        <div className={styles.list_container}>
          {/* List Display */}
          <HomesListDisplay items={new_items} />
          {/* Map Display */}
          <div className="sticky">
            <HomesDisplayMap address={address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForRent;
