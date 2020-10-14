import React from 'react';
import styles from './PropertyBroker.module.scss';
interface IPropertyBrokerProp<T, K> {
  broker: T | any;
  office: K | any;
}
const PropertyBroker = <T, K>({ broker, office }: IPropertyBrokerProp<T, K>) => {
  return (
    <div className={styles.container}>
      <div className={styles.broker}>
        <div>
          <span>Brokered by:</span>
          <h4>{broker.name}</h4>
        </div>
        <div className={styles.phone}>
          <span>Contact number:</span>
          <h4>{broker.phone1.number}</h4>
        </div>
      </div>
      <div className={styles.office}>
        <div>
          <span>Office:</span>
          <h4>{office.address.city}</h4>
        </div>
        <div className={styles.last}>
          <span>Email:</span>
          <h4>{office.email}</h4>
        </div>
      </div>
      <div className={styles.slogan}>
        <div>
          <span>Slogan:</span>
          <h4>{office.slogan}</h4>
        </div>
        <div className={styles.phones}>
          <span>Phones: </span>
          {office.phones.map((item: any, i: number) => (
            <h4 key={i}>{item.number}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyBroker;
