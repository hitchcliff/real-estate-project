import React, { useState } from 'react';
import styles from './HomesListDisplay.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { formatNumber, propStatus } from '../../helpers/util';

import Pagination from '../Pagination/Pagination';
import HomesDisplayCarousel from '../HomesDisplayCarousel/HomesDisplayCarousel';
import { PropertiesRent } from '../../types/Rent.types';
import { Link } from 'react-router-dom';
import PropertySave from '../PropertySave/PropertySave';

interface IHomesListDisplayProp {
  items?: PropertiesRent[];
}
const HomesListDisplay: React.FC<IHomesListDisplayProp> = (prop) => {
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
        <HomesDisplayCarousel
          images={item.photos}
          alt={item.address.line}
          thumbs={false}
        />
      </div>
      <div className={styles.details}>
        {/* header */}
        <div className={styles.header__details}>
          <div className={styles.details_title}>
            <h4>
              {item.community.name} {propStatus(item.prop_status)}
            </h4>
            <span className={styles.date}>
              Last update: {new Date(item.last_update).toLocaleString()}
            </span>
          </div>
          <div className={styles.details_price}>
            <h2>{formatNumber(item.community.price_max)}</h2>
            <span>{formatNumber(item.community.price_min)}</span>
            {/* <span className={styles.est}>Est. $1k/mo</span> */}
          </div>
        </div>
        {/* body */}
        <div className={styles.body__details}>
          <div className={styles.details_desc}>
            <h4>Details: </h4>
            <p>
              {' '}
              {item.community.sqft_min} sqft. - {item.community.sqft_max} sqft. Lot size
            </p>
          </div>
          <div className={styles.details_address}>
            <h4>Address: </h4>
            <p>
              {' '}
              {item.address.neighborhood_name && item.address.neighborhood_name + ', '}
              {item.address.line}
            </p>
          </div>
        </div>
        {/* footer */}
        <div className={styles.footer__details}>
          <div className={styles.details_info}>
            <div>
              <FontAwesomeIcon icon={faBed} />
              {item.community.beds_max} <h4>Bedroom</h4>
            </div>
            <div>
              <FontAwesomeIcon icon={faBath} />
              {item.community.baths_max} <h4>Bathroom</h4>
            </div>
            <div>
              <button className={styles.primary}>
                <Link to={`/rent/${item.property_id}`}>View details</Link>
              </button>
            </div>
            {/* save */}
            <PropertySave<PropertiesRent, any> item={item} id={item.property_id} />
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

export default HomesListDisplay;
