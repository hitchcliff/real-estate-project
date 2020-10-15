import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DesktopMenu.module.scss';

// menus
import { Menu, PrimaryMenu } from './primaryMenu';
const DesktopMenu = () => {
  return (
    <ul className={styles.desktopMenu}>
      {PrimaryMenu.map((item: Menu, i) => {
        return (
          <li key={i}>
            <NavLink exact={true} to={item.link} activeClassName={styles.active}>
              {item.menu}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;
