import styles from './ToggleSelectionFaIcons.module.css';
import React, { useState } from 'react';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
interface IToggleProp {
  icons: IconDefinition[] | unknown; // fontawesome icon definition types
  callback: (target: string) => void;
}
const ToggleSelectionFaIcons = (props: IToggleProp) => {
  const { icons, callback } = props;
  const [state, setState] = useState<string | undefined>(`1`); // set default

  const handleClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    i: number,
  ): void | undefined => {
    const target = e.currentTarget.className; // get the classname
    if (target !== i.toString()) return; // to check if the class is "active"
    setState(target); // set the target to current classname
    callback(target); // return the callback
  };

  if (!Array.isArray(icons)) return <></>;
  const iconMapper = icons?.map((item, i) => {
    return (
      <span
        key={i}
        className={state === i.toString() ? styles.active : i.toString()} // value used to toggle the state and data
        onClick={(e) => handleClick(e, i)} // pass the index to check the current classname
      >
        <FontAwesomeIcon icon={item} />
      </span>
    );
  });

  return <div className={styles.container}>{iconMapper}</div>;
};

export default ToggleSelectionFaIcons;
