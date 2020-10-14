import React from 'react';
import styles from './PropertyInfo.module.scss';
import cx from 'classnames';

// icons
import {
  faArrowsAltH,
  faBath,
  faBed,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import { AddressDetails } from '../../types/Details.types';
import PropertyDisplayMap from '../PropertyDisplayMap/PropertyDisplayMap';

// util
import { formatNumber, formatNumberEstPerMonth, formatString } from '../../helpers/util';
import { getPropertyAddress } from '../../helpers/map.address';
import PropertyDetails from '../PropertyDetails/PropertyDetails';

interface IPropertyInfoProp<T> {
  property: T | any;
}

const PropertyInfo = <T,>({ property }: IPropertyInfoProp<T>) => {
  const {
    prop_type,
    year_built,
    price,
    address,
    feature_tags,
    building_size,
    lot_size,
    beds,
    baths,
  } = property;

  const formatAddress = getPropertyAddress<PropertyDetails>(property);

  return (
    <div className={styles.info}>
      <div className={styles.left}>
        <span>
          <b>Type: </b> {prop_type} | <b>Year built:</b>
          {year_built}
        </span>
        <div className={styles.showcaseDetails}>
          <div className={styles.showcaseDetailsPrice}>
            <div className={styles.price}>
              <h2>{formatNumber(price)}</h2>
              <span className={styles.est}>
                Est. {formatNumberEstPerMonth(price)} / mo
              </span>
            </div>
            <div className={styles.address}>
              <span>
                {' '}
                <b>Address: </b>
                {address.country ? address.country + ' ,' : null} {address.line}{' '}
                {address.city}
              </span>
              <div className={styles.tags}>
                {feature_tags.map((item: string, i: number) => (
                  <span key={i}>{formatString(item)}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.showcaseDetailsInfo}>
            <div className={styles.icons}>
              <span>
                <FontAwesomeIcon icon={faBuilding} />
                {building_size ? building_size.size : 'N/A'} sqft.
              </span>
            </div>
            <div className={styles.icons}>
              <span>
                <FontAwesomeIcon icon={faArrowsAltH} />
                {lot_size ? lot_size.size : 'N/A'} sqft.
              </span>
            </div>
            <div className={styles.icons}>
              <span>
                <FontAwesomeIcon icon={faBed} />
                {beds} Beds
              </span>
            </div>
            <div className={styles.icons}>
              <span>
                <FontAwesomeIcon icon={faBath} />
                {baths} Baths
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.right, 'mini-map')}>
        <PropertyDisplayMap<AddressDetails> address={[]} property={formatAddress} />
      </div>
    </div>
  );
};

export default PropertyInfo;
