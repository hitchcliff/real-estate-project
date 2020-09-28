import React, { useEffect, useState } from 'react';
import styles from './HomesView.selection.module.scss';

import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import ToggleSelectionFaIcons from '../ToggleSelectionFaIcons/ToggleSelectionFaIcons';

import { useDispatch } from 'react-redux';
import { ViewAction } from '../../Actions/View.action';
import { filterTimeOut } from '../../helpers/filter';

const HomesViewSelection = () => {
  const [state, setState] = useState<number>(1); // 0 for development purposes
  const dispatch = useDispatch();

  const handleToggleSelectionIcons = (e: string) => {
    setState(parseInt(e)); // 0 list or 1 grid
  };

  // setting the view
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(ViewAction(state));
    }, filterTimeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  return (
    <div className={styles.display}>
      <ToggleSelectionFaIcons
        callback={handleToggleSelectionIcons}
        icons={[faThList, faThLarge]}
      />
    </div>
  );
};

export default HomesViewSelection;
