import React, { useState } from 'react';
import styles from './PropertyGridDisplay.module.scss';

// solid
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsAltH,
  faBed,
  faBuilding,
  faBath,
} from '@fortawesome/free-solid-svg-icons';

import Pagination from '../Pagination/Pagination';
import { formatNumber, formatNumberEstPerMonth } from '../../helpers/util';
import PropertyDisplayCarousel from '../PropertyDisplayCarousel/PropertyDisplayCarousel';
import PropertySave from '../PropertySave/PropertySave';
import { Link } from 'react-router-dom';

interface IRentGridDisplayProp<T, Images> {
  items?: T[];
  images?: Images;
}
// tslint:disable-next-line: typedef
const PropertyGridDisplay = <T, Images>(props: IRentGridDisplayProp<T, Images>) => {
  const { items } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const lastIndex = currentPage * itemsPerPage; // get the last index
  const firstIndex = lastIndex - itemsPerPage; // get the first index
  if (!items) {
    return null;
  }
  const _items = items.slice(firstIndex, lastIndex); // slice the items
  const totalPagesNumber = Math.ceil(items.length / itemsPerPage);

  const handleClickPageNumber = (num: number) => {
    setCurrentPage(num);
  };

  const itemsMapper = _items?.map((item: any) => {
    if (!item) return;
    return (
      <div key={item.property_id} className={styles.home}>
        {/* overlay */}
        <div className={styles.home_overlay}>
          <div className={styles.home_icons}>
            <ul>
              <li>
                {' '}
                <FontAwesomeIcon icon={faArrowsAltH} />{' '}
                {item.lot_size ? item.lot_size.size : 'N/A'} sqft.{' '}
              </li>
              <li>
                {' '}
                <FontAwesomeIcon icon={faBed} /> {item.beds} Bed(s){' '}
              </li>
            </ul>
            <ul>
              <li>
                {' '}
                <FontAwesomeIcon icon={faBuilding} />{' '}
                {item.building_size ? item.building_size.size : 'N/A'} sqft.{' '}
              </li>
              <li>
                {' '}
                <FontAwesomeIcon icon={faBath} /> {item.baths} Bath(s){' '}
              </li>
            </ul>
          </div>
          <div className={styles.home_button}>
            <button className="primary-button">
              <Link to={`/property/${item.property_id}`}>View details</Link>
            </button>
          </div>
        </div>
        {/* content */}
        <div className={styles.home_showcase}>
          {/* Image */}
          <div className={styles.showcase_image}>
            {item.photos ? (
              <PropertyDisplayCarousel<Images>
                images={item.photos}
                alt={item.address.line}
                thumbs={false}
              />
            ) : (
              <img src={item.thumbnail} alt={item.address.line} />
            )}
          </div>
          <div className={styles.showcase_header}>
            {item.client_display_flags.is_new_listing && (
              <span className={styles.tag}>New</span>
            )}
            <p>
              {item.address.neighborhood_name} {item.address.line}
            </p>
          </div>
          <div className={styles.showcase_footer}>
            <div>
              {/* check if its for_rent */}
              {item.prop_type !== 'for_rent' ? (
                <h4>
                  {formatNumber(item.price)}
                  {/* check if its for_rent */}
                  {item.prop_status !== 'for_rent' && (
                    <span className={styles.est}>
                      Est. {formatNumberEstPerMonth(item.price)}/mo
                    </span>
                  )}
                </h4>
              ) : (
                <h4>
                  {formatNumber(item.community.price_min)} -{' '}
                  {formatNumber(item.community.price_max)}
                  <span>/ mo</span>
                </h4>
              )}
            </div>
            {/* save property*/}
            <PropertySave<T, T> item={item} id={item.property_id} />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.home_container}>{itemsMapper}</div>
      <Pagination number={totalPagesNumber} callback={handleClickPageNumber} />
    </div>
  );
};

export default PropertyGridDisplay;
