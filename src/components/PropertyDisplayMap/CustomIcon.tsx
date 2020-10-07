import React from 'react';
import { formatNumber2 } from '../../helpers/util';
import { MapAddress } from '../../types/Rent.types';
import styles from './PropertyDisplayMap.module.scss';

interface ICustomIconProp<T> {
  items?: MapAddress | any;
}

const CustomIcon = <T,>(props: ICustomIconProp<T>) => {
  const { items } = props;
  return (
    <div className={styles.customIcon}>
      <p key={items?.photos}>
        {items?.price ? formatNumber2(items.price) : items?.price}
      </p>
    </div>
  );
};

export default CustomIcon;
