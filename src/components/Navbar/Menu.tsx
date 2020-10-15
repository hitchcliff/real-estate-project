import React from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.scss';
const Menu = () => {
  return (
    <div className={styles.menu}>
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default Menu;
