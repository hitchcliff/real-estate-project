import React, { useEffect, useState } from 'react';

// scss
import styles from './PropertyDetails.module.scss';
import './PropertyDetailsCarousel.scss';
import './PropertyDetailsMiniMap.scss';

import cx from 'classnames';

// store
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { DetailsAction } from '../../Actions/Details.action';
import { IDetailsReducerProp } from '../../Reducers/Details.reducer';
import { RootStore } from '../../Store';

// types
import {
  Details,
  PropertyHistoryDetails,
  SchoolDetails,
} from '../../types/Details.types';

// components
import PropertyDisplayCarousel from '../PropertyDisplayCarousel/PropertyDisplayCarousel';
import PageNotFound from '../404/404';

// components
import PropertyForm from '../PropertyForm/PropertyForm';
import PropertyNearbySchools from '../PropertyNearbySchools/PropertyNearbySchools';
import PropertyHistory from '../PropertyHistory/PropertyHistory';
import PropertyBroker from '../PropertyBroker/PropertyBroker';
import PropertyRelated from '../PropertyRelated/PropertyRelated';
import PropertyInfo from '../PropertyInfo/PropertyInfo';

// loading
import Loading from '../Loading/Loading';

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
  const [Property, setProperty] = useState<Details | any>();

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

  // dispatch detailsaction
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
  // format address to have price and photo

  return (
    <div className={cx(styles.propertyDetails, 'property-details')}>
      {/* showcase */}
      <div className={styles.carousel}>
        <PropertyDisplayCarousel
          images={Property.photos}
          thumbs={true}
          alt={Property.address.line}
          showArrows={false}
          showStatus={false}
        />
        {/* form */}
        <PropertyForm />
      </div>
      <PropertyInfo<PropertyDetails> property={Property} />
      <PropertyNearbySchools<SchoolDetails> item={Property.schools} />
      <PropertyHistory<PropertyHistoryDetails> item={Property.property_history} />
      <PropertyBroker<any, any> broker={Property.broker} office={Property.office} />{' '}
      <PropertyRelated<PropertyDetails>
        related={Property}
        prop_type={Property.prop_type}
        status={Property.listing_status}
      />
    </div>
  );
};

export default PropertyDetails;
