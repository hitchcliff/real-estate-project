import React, { useEffect, useState } from 'react';
import styles from './PropertyRelated.module.scss';

import cx from 'classnames';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// state
import { PropertiesAction } from '../../Actions/Properties.action';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';

// tempo data
import PropertyGridDisplay from '../PropertyGridDisplay/PropertyGridDisplay';
import { Carousel } from 'react-responsive-carousel';

interface IPropertyRelatedProp<T> {
  related: T;
  prop_type: string;
  status: string;
}

const PropertyRelated = <T,>({ related, prop_type, status }: IPropertyRelatedProp<T>) => {
  const { data, loading } = useSelector((state: RootStore) => state.properties);
  const dispatch = useDispatch();

  const [filtered, setFiltered] = useState<T[]>([]);

  // use action
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(PropertiesAction('list_for_' + prop_type.toLowerCase()));
    });
    return () => {
      clearTimeout(timer);
    };
  }, [prop_type, status, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!data) return;
      const filteredData: any = data.filter(
        (item: any) => item.prop_status.toLowerCase() === status,
      );
      setFiltered(filteredData);
    });
    return () => {
      clearTimeout(timer);
    };
  }, [status, data]);

  // no related properties
  if (filtered.length === 0) return <></>;
  return (
    <div className={cx(styles.container, 'property-related')}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faHome} />
        <h2>Related Properties</h2>
      </div>
      <Carousel
        showArrows={true}
        showIndicators={false}
        className={styles.carousel}
        showStatus={false}
      >
        <div>
          <PropertyGridDisplay<any, any>
            items={data}
            itemPerPage={4}
            pagination={false}
            isGrid={true}
          />
        </div>
        <div>
          <PropertyGridDisplay<any, any>
            items={data}
            itemPerPage={9}
            pagination={false}
            offset={5}
            isGrid={true}
          />
        </div>
        <div>
          <PropertyGridDisplay<any, any>
            items={data}
            itemPerPage={13}
            pagination={false}
            offset={9}
            isGrid={true}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default PropertyRelated;
