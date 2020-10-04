import React from 'react';
import { Link } from 'react-router-dom';
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

      {/* menu */}
      <ul className={styles.menu}>
        <li className={styles.active}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/sale">Sale</Link>
        </li>
        <li>
          <Link to="/rent">Rent</Link>
        </li>
        <li>
          <Link to="/sold">Sold</Link>
        </li>
      </ul>
      <div className={styles.auth}>
        <button className="button-primary">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
