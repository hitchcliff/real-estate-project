import React, { useState } from 'react';
import styles from './SaleListDisplay.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { formatNumber, propStatus } from '../../helpers/util';

import Pagination from '../Pagination/Pagination';
import { PropertiesSale } from '../../types/Sale.types';

interface IHomesListDisplayProp {
  items?: PropertiesSale[];
}
const SaleListDisplay: React.FC<IHomesListDisplayProp> = (prop) => {
  const { items } = prop;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const lastIndex = currentPage * itemsPerPage; // get the last index
  const firstIndex = lastIndex - itemsPerPage; // get the first index
  if (!items) {
    return <></>;
  }

  const _items = items.slice(firstIndex, lastIndex); // slice the items
  const totalPagesNumber = Math.ceil(items.length / itemsPerPage);

  const handleClickPageNumber = (num: number): void => {
    setCurrentPage(num);
  };

  const itemsMapper = _items?.map((item) => (
    <div key={item.property_id} className={styles.item_container}>
      <div className={styles.image_container}>
        <img src={item.thumbnail} alt={item.address.line} />
      </div>
      <div className={styles.details}>
        {/* header */}
        <div className={styles.header__details}>
          <div className={styles.details_title}>
            <h4>{/* {item.branding} {propStatus(item.prop_status)} */}</h4>
            <span className={styles.date}>
              Last update: {new Date(item.last_update).toLocaleString()}
            </span>
          </div>
          <div className={styles.details_price}>
            <h2>{formatNumber(item.price)}</h2>
            <span className={styles.est}>Est. $1k/mo</span>
          </div>
        </div>
        {/* body */}
        <div className={styles.body__details}>
          <div className={styles.details_desc}>
            <h4>Details: </h4>
            <p>
              {' '}
              {/* {item.lot_size.size} sqft. Lot size | {item.building_size.size}{' '} */}
              sqft. Building size
            </p>
          </div>
          <div className={styles.details_address}>
            <h4>Address: </h4>
            <p>
              {' '}
              {item.address.neighborhood_name &&
                item.address.neighborhood_name + ', '}
              {item.address.line}
            </p>
          </div>
        </div>
        {/* footer */}
        <div className={styles.footer__details}>
          <div className={styles.details_info}>
            <div>
              <FontAwesomeIcon icon={faBed} />
              {item.beds} <h4>Bedroom</h4>
            </div>
            <div>
              <FontAwesomeIcon icon={faBath} />
              {item.baths} <h4>Bathroom</h4>
            </div>
            <div>
              <button className={styles.primary}>
                <a href="!#">Contact</a>
              </button>
            </div>
            {/* save */}
            <div>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.home_container}>{itemsMapper}</div>
      <Pagination number={totalPagesNumber} callback={handleClickPageNumber} />
    </div>
  );
};

export default SaleListDisplay;
