import React from 'react';
import styles from './Footer.module.scss';

// icons
import {
  faApple,
  faFacebookF,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <div className={styles.footer1}>
      <div className={styles.customerService}>
        <h4>CUSTOMER SERVICE</h4>
        <ul className={styles.link}>
          <li>
            <a href="!#">Help Centre</a>
          </li>
          <li>
            <a href="!#">Payment Methods</a>
          </li>
          <li>
            <a href="!#">Life Pay</a>
          </li>
          <li>
            <a href="!#">Life Centre</a>
          </li>
          <li>
            <a href="!#">Virtual Tours</a>
          </li>
          <li>
            <a href="!#">Life Guarantee</a>
          </li>
          <li>
            <a href="!#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={styles.aboutLife}>
        <h4>About Shopee</h4>
        <ul className={styles.link}>
          <li>
            <a href="!#">About Us</a>
          </li>
          <li>
            <a href="!#">Life Blog</a>
          </li>
          <li>
            <a href="!#">Life Careers</a>
          </li>
          <li>
            <a href="!#">Life Policies</a>
          </li>
          <li>
            <a href="!#">Privacy Policy</a>
          </li>
          <li>
            <a href="!#">Seller Centre</a>
          </li>
        </ul>
      </div>
      <div className={styles.followUs}>
        <h4>Follow Us</h4>
        <ul className={styles.social}>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faFacebookF} />
              Facebook
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.download}>
        <h4>Life App Download</h4>
        <ul className={styles.apps}>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faApple} />
              Get it on App Store
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faGooglePlay} />
              Get it on Android
            </a>
          </li>
          <span>
            Made by with &hearts; by&nbsp;
            <Link to="godjs.ga">Kevin Nacario</Link>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Footer1;
