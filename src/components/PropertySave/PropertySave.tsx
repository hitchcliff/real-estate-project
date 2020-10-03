import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styles from './PropertySave.module.scss';

// icons
// import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { removeItemLocalStorate, setItemLocalStorage } from '../../helpers/util';
const saved = require('@fortawesome/free-solid-svg-icons/faHeart');

interface IPropertySave<T, K> {
  item?: T;
  id: K;
}

const PropertySave = <T, K extends T>({ item, id }: IPropertySave<T, K>) => {
  const [state, setState] = useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setState(!state);
  };

  useEffect(() => {
    if (state) {
      if (!item) return;
      if (typeof id !== 'string') return;
      setItemLocalStorage<T, string>(item, id);
    }
  }, [state]);

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={state ? saved.faHeart : faHeart} onClick={handleClick} />
    </div>
  );
};

export default PropertySave;
