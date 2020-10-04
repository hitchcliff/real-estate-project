import React, { ReactElement, useState } from 'react';
import styles from './ToggleSelectionText.module.css';
interface ToggleSelectionProps {
  items: ItemsType;
  callback: Function;
  defaultChecked: string;
}
interface ItemsType {
  value: string[];
  name: string[];
}
const ToggleSelectionText: React.FC<ToggleSelectionProps> = (props): ReactElement => {
  const {
    items: { value, name },
    defaultChecked,
    callback,
  } = props;
  const [state, setState] = useState<string | typeof defaultChecked>(defaultChecked);

  if (!value || !name || !callback) return <></>;

  const handleClickChange = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    i: number,
  ) => {
    const target = e.currentTarget.childNodes[0]; // get the current target child
    const targetValue: string | null = target.textContent; // get the target content
    if (!targetValue) return; // return if there is no value, might be bug
    setState(value[i]); //set the value based on the current index selected
    callback(value[i]); // return the callback
  };

  return (
    <ul>
      {/* Map the name in items */}
      {name.map((item, i) => (
        <li
          key={i}
          onClick={(e) => handleClickChange(e, i)}
          className={state === value[i] ? styles.active : styles.default}
        >
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ToggleSelectionText;
