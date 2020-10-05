import React, { useEffect, useState } from 'react';
import styles from './PropertyDetails.module.scss';
import './PropertyDetailsCarousel.scss';

// store
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { DetailsAction } from '../../Actions/Details.action';
import { IDetailsReducerProp } from '../../Reducers/Details.reducer';
import { RootStore } from '../../Store';

// types
import { AddressDetails, Details } from '../../types/Details.types';

// components
import PropertyDisplayCarousel from '../PropertyDisplayCarousel/PropertyDisplayCarousel';
import PageNotFound from '../404/404';

// icons
import {
  faBath,
  faBed,
  faArrowsAltH,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatNumber, formatNumberEstPerMonth } from '../../helpers/util';
import PropertyDisplayMap from '../PropertyDisplayMap/PropertyDisplayMap';
import PropertyForm from '../PropertyForm/PropertyForm';

interface PropertyDetails extends RouteComponentProps {}
interface Params {
  id?: string;
}

const PropertyDetails: React.FC<PropertyDetails> = ({ match }) => {
  const [property_id, setProperty_id] = useState<string>('');
  const dispatch = useDispatch();
  const { data, loading }: IDetailsReducerProp = useSelector(
    (state: RootStore) => state.details,
  );

  // Property
  const [Property, setProperty] = useState<Details>();

  // get the id of the property
  useEffect(() => {
    const params: Params = match.params;
    const interval = setTimeout(() => {
      if (!params.id) return setProperty_id('id_not_found');
      setProperty_id(params.id);
    });
    return () => {
      clearTimeout(interval);
    };
  }, [match]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      dispatch(DetailsAction());
    });
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, match]);

  // loop through all the post and match the id (very bad)
  useEffect(() => {
    if (!data) return;
    const timer = setTimeout(() => {
      for (const prop of data) {
        if (prop.property_id === property_id) {
          setProperty(prop);
        }
      }
    });
    return () => {
      clearTimeout(timer);
    };
  }, [data, property_id]);

  if (!Property) return <PageNotFound />;
  console.log(Property);
  return (
    <div className="property-details">
      {/* showcase */}
      <div className={styles.carousel}>
        <PropertyDisplayCarousel
          images={Property.photos}
          thumbs={true}
          alt={Property.address.line}
        />
        {/* form */}
        <PropertyForm />
      </div>
      {/* info */}
      <div className={styles.info}>
        <div className={styles.left}>
          <span>
            <b>Type: </b> {Property.prop_type} | <b>Year built:</b>
            {Property.year_built}
          </span>
          <div className={styles.showcaseDetails}>
            <div className={styles.showcaseDetailsPrice}>
              <div className={styles.price}>
                <h2>{formatNumber(Property.price)}</h2>
                <span className={styles.est}>
                  Est. {formatNumberEstPerMonth(Property.price)} / mo
                </span>
              </div>
              <div className={styles.address}>
                <span>
                  {' '}
                  <b>Address: </b>
                  {Property.address.country ? Property.address.country + ' ,' : null}{' '}
                  {Property.address.line} {Property.address.city}
                </span>
                <div className={styles.tags}>
                  {Property.feature_tags.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.showcaseDetailsInfo}>
              <div className={styles.icons}>
                <span>
                  <FontAwesomeIcon icon={faBuilding} />
                  {Property.building_size ? Property.building_size.size : 'N/A'} sqft.
                </span>
              </div>
              <div className={styles.icons}>
                <span>
                  <FontAwesomeIcon icon={faArrowsAltH} />
                  {Property.lot_size ? Property.lot_size.size : 'N/A'} sqft.
                </span>
              </div>
              <div className={styles.icons}>
                <span>
                  <FontAwesomeIcon icon={faBed} />
                  {Property.beds} Beds
                </span>
              </div>
              <div className={styles.icons}>
                <span>
                  <FontAwesomeIcon icon={faBath} />
                  {Property.baths} Baths
                </span>
              </div>
            </div>{' '}
            {/* end info */}
          </div>{' '}
          {/* end showcase details */}
        </div>{' '}
        {/* end left column */}
        <div className={styles.right}>
          <PropertyDisplayMap<AddressDetails> address={[]} property={Property.address} />
        </div>
        {/* end right column */}
      </div>{' '}
      {/* end info */}
    </div>
  );
};

export default PropertyDetails;
