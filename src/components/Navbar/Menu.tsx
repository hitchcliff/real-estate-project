import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
const Menu = () => {
    return (
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
    );
};

export default Menu
