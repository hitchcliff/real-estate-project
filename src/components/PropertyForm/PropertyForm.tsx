import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './PropertyForm.module.scss';

const PropertyForm = () => {
  return (
    <form className={styles.form} method="post">
      {/* fullname */}
      <div className={styles.formGroup}>
        <span className={styles.label}>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <input type="text" name="full" placeholder="Full name" />
      </div>

      {/* email */}
      <div className={styles.formGroup}>
        <span className={styles.label}>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <input type="email" name="email" placeholder="Email" />
      </div>

      {/* phone number */}
      <div className={styles.formGroup}>
        <span className={styles.label}>
          <FontAwesomeIcon icon={faPhone} />
        </span>
        <input type="number" name="phone" placeholder="Phone number" />
      </div>

      {/* message */}
      <div className={styles.formGroup}>
        <textarea
          name="message"
          id="message"
          rows={3}
          placeholder="I’m so interested in buying this house, let me know once..."
        />
      </div>

      <div className={styles.button}>
        {/* button */}
        <button className="primary-button">
          <a href="!#">Email agent</a>
        </button>
      </div>

      {/* gdpr */}
      <p>
        By proceeding, you consent to receive calls and texts at the number you provided
      </p>
    </form>
  );
};

export default PropertyForm;
