import React from 'react';
import styles from './HomesDisplayMap.module.scss';
const CustomIcon = (props: any) => {
  return (
    <div className={styles.customIcon}>
      <p>$1.2k</p>
    </div>
  );
};

export default CustomIcon;
