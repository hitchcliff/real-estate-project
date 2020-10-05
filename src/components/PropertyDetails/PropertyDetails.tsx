import React, { useEffect, useState } from 'react';
import styles from './PropertyDetails.module.scss';

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
import { convertCompilerOptionsFromJson } from 'typescript';

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
    if (!Array.isArray(data)) return;
    const timer = setTimeout(() => {
      for (const item of data) {
        if (item.property_id === property_id) {
          setItem(item);
        }
        return;
      }
    });
    return () => {
      clearTimeout(timer);
    };
  }, [data]);
  console.log(data);
  console.log(item);

  return (
    <div className={styles.container}>
      {/* if returns undefined */}
      {!item ? <PageNotFound /> : <div>We have an item {item.property_id}</div>}
    </div>
  );
};

export default PropertyDetails;
