import React, { useState } from 'react';
import styles from './MobileMenu.module.scss';

// icons
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// link
import { NavLink } from 'react-router-dom';

// menus
import { Menu, PrimaryMenu } from './primaryMenu';
const MobileMenu = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <div className={styles.mobile_container}>
      <div className={styles.burger} onClick={() => setState(!state)}>
        <FontAwesomeIcon icon={faHouseUser} />
      </div>
      <ul className={state ? styles.dropdownActive : styles.dropdown}>
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
    </div>
  );
};

export default MobileMenu;
