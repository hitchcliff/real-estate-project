import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import styles from './Navbar.module.scss';

// image
import Logo from '../../logo.svg';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="life house" />
      </div>
      <Menu />
      <div className={styles.auth}>
        <button className="button-primary">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
