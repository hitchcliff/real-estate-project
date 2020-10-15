import React from 'react';
import styles from './Footer.module.scss';

// components
import Footer2 from './Footer2';
import Footer1 from './Footer1';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Footer1 />
      <Footer2 />
    </footer>
  );
};

export default Footer;
