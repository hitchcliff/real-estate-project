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
import { Details } from '../../types/Details.types';

// components
import PropertyDisplayCarousel from '../PropertyDisplayCarousel/PropertyDisplayCarousel';
import PageNotFound from '../404/404';

// icons
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  // item
  const [item, setItem] = useState<Details>();

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

  if (!Property) return <></>;
  console.log(Property);
  return (
    <div className="property-details">
      {/* if returns undefined */}
      <div className={styles.carousel}>
        <PropertyDisplayCarousel
          images={Property.photos}
          thumbs={true}
          alt={Property.address.line}
        />
        <form className={styles.form} method="post">
          {/* fullname */}
          <div className={styles.formGroup}>
            <span className={styles.label}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input type="text" name="full" placeholder="Full name" value="" />
          </div>

          {/* email */}
          <div className={styles.formGroup}>
            <span className={styles.label}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" name="email" placeholder="Email" value="" />
          </div>

          {/* phone number */}
          <div className={styles.formGroup}>
            <span className={styles.label}>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <input type="number" name="phone" placeholder="Phone number" value="" />
          </div>

          {/* message */}
          <div className={styles.formGroup}>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="I’m so interested in buying this house, let me know once..."
            />
          </div>

          <div className={styles.button}>
            {/* button */}
            <button className="primary-button">
              <a href="!#">Email agent</a>
            </button>
          </div>

          {/* gdpr */}
          <p>
            By proceeding, you consent to receive calls and texts at the number you
            provided
          </p>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
