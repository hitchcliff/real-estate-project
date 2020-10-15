import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>Real Estate Example</h2>
        <span>
          Made by with &hearts; by&nbsp;
          <Link to="godjs.ga">Kevin Nacario</Link>
        </span>
      </div>
      <Menu/>
      <div className={styles.auth}>
        <button className="button-primary">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
