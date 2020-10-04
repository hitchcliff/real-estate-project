import React, { ReactElement } from 'react';
import { TrackingParams } from '../../types';
import AccordionList from '../AccordionList/AccordionList';
import SortByBaths from '../SortByBaths/SortByBaths';
import SortByBeds from '../SortByBeds/SortByBeds';
import SortByPrice from '../SortByPrice/SortByPrice';
import SortByPropertyType from '../SortByPropertyType/SortByPropertyType';
import styles from './Filter.module.scss';
interface IFilterProp {
  filter?: TrackingParams;
}
const Filter: React.FC<IFilterProp> = (props): ReactElement => {
  const tracking_params = props;

  if (!tracking_params) return <></>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Filters</h2>
          <div>
            <button className="recent-search">Recent search</button>
          </div>
        </div>
      </div>
      <div className={styles.filters}>
        <SortByPrice />
        <SortByPropertyType />
        <SortByBeds />
        <SortByBaths />
        <AccordionList />
        <div className={styles.button}>
          <button className="search-button">
            <a href="http://google.com">Save search</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
