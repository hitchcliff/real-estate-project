import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styles from './PropertySave.module.scss';

// icons
// import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  getSavedStateLocalStorage,
  removeItemLocalStorage,
  setItemLocalStorage,
} from '../../helpers/util';
const saved = require('@fortawesome/free-solid-svg-icons/faHeart');

interface IPropertySave<T, K> {
  item?: T;
  id: K;
}

const PropertySave = <T, K extends T>({ item, id }: IPropertySave<T, K>) => {
  const [state, setState] = useState<boolean>(false);
  const [localStorage, setLocalStorage] = useState<string>('');
  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (!state === false) {
      removeItemLocalStorage(id);
    }

    setState(!state);
  };

  useEffect(() => {
    if (state) {
      if (!item) return;
      if (typeof id !== 'string') return;

      // set the item
      setItemLocalStorage<T, string>(item, id);

      // set state we get from local to state
      const result = getSavedStateLocalStorage<K>(id);
      if (!result) return;
      setLocalStorage(result);
    } else {
      setLocalStorage('');
    }
  }, [state]);

  // get the local state on load
  useEffect(() => {
    const timer = setTimeout(() => {
      // set state we get from local to state
      const result = getSavedStateLocalStorage<K>(id);
      if (!result) return;
      setLocalStorage(result);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (typeof id !== 'string') return <></>;
  console.log('id ' + id, 'local state ' + localStorage);

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={id === localStorage ? saved.faHeart : faHeart}
        onClick={handleClick}
      />
    </div>
  );
};

export default PropertySave;
