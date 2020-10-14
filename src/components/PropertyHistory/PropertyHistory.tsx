import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './PropertyHistory.module.scss';
interface IPropertyHistoryProp<T> {
  item: T[];
}
const PropertyHistory = <T,>({ item }: IPropertyHistoryProp<T>) => {
  if (!item) return <></>;
  console.log(item);
  const mapHistory = item.map((property: T | any, index) => {
    if (!property) return;

    const { date, event_name, price, source } = property;
    return (
      <tr key={index}>
        <td>{new Date(date).toLocaleDateString()}</td>
        <td>{event_name}</td>
        <td>{price}</td>
        <td>{source}</td>
      </tr>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.heading}>
          <FontAwesomeIcon icon={faHistory} />
          <h2>Property History</h2>
        </div>
        <table>
          <tbody>
            <tr className={styles.heads}>
              <th>Date</th>
              <th>Event</th>
              <th>Price</th>
              <th>Source</th>
            </tr>
            {mapHistory}
          </tbody>
        </table>
        <div className={styles.footer}>
          *About History &amp; Taxes Data The price and tax history data displayed is
          obtained from public records and/or MLS feeds from the local jurisdiction.
          Contact your REALTOR® directly in order to obtain the most up-to-date
          information available.
        </div>
      </div>
    </div>
  );
};

export default PropertyHistory;
