import React from 'react';
import styles from './Footer.module.scss';

// components
import DesktopMenu from '../Navbar/DesktopMenu';

// images
import Logo from '../../logo.svg';
import Building from '../../assets/images/urban_slums.jpg';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer2 = () => {
  return (
    <div className={styles.footer2}>
      <div className={styles.nav}>
        <DesktopMenu />
        <div className={styles.doNotSellInformation}>
          <a href="!#">Do not sell my information</a>
        </div>
      </div>
      <div className={styles.report}>
        <p>
          Life House is committed to ensuring digital accessibility for individuals with
          disabilities. We are continuously working to improve the accessibility of our
          web experience for everyone, and we welcome feedback and accommodation requests.
          If you wish to report an issue or seek an accommodation, please{' '}
          <a>contact us</a>.
        </p>
        <br />
        <p>
          Life, Inc. has a real estate brokerage license in multiple states. A list of our
          real estate licenses is available here. TREC: Information about brokerage
          services, Consumer protection notice California DRE #1522444
        </p>
      </div>
      <div className={styles.social}>
        <img src={Logo} alt="Life House" />
        <h6 className={styles.logo}>Life House</h6>
        <ul className={styles.socialIcons}>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
        <p>2020 &copy; Life House</p>
      </div>
      <div className={styles.building} style={{ backgroundImage: `url(${Building})` }} />
    </div>
  );
};

export default Footer2;
