import React from 'react';
import styles from './PropertyNearbySchools.module.scss';

import cx from 'classnames';

// icons
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IPropertyNearbySchools<T> {
  item: T[];
}

const PropertyNearbySchools = <T,>({ item }: IPropertyNearbySchools<T>) => {
  if (!Array.isArray(item)) return <></>;

  const mapTables = item.map((data: any, index: number) => {
    const range = data.grades.range;
    const ratings = data.ratings.great_schools_rating;
    return (
      <tr key={index}>
        <td
          className={
            ratings >= 8
              ? cx('school-rating', 'school-rating-high')
              : ratings >= 5
              ? cx('school-rating', 'school-rating-med')
              : ratings >= 1
              ? cx('school-rating', 'school-rating-low')
              : cx('school-rating', 'school-rating-none')
          }
        >
          {ratings ? ratings : 0}
        </td>
        <td>{data.name}</td>
        <td>
          {range.low}-{range.high}
        </td>
        <td>{data.distance_in_miles}</td>
      </tr>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.heading}>
          <FontAwesomeIcon icon={faSchool} />
          <h2>Nearby Schools</h2>
        </div>
        <table>
          <tbody>
            <tr className="heads">
              <th>Rating</th>
              <th>School Name</th>
              <th>Grades</th>
              <th>Distance(miles)</th>
            </tr>
            {mapTables}
          </tbody>
        </table>
        <div className={styles.footer}>
          <p>
            *School data provided by National Center for Education Statistics, Pitney
            Bowes, and GreatSchools. Intended for reference only. The GreatSchools Rating
            is based on a variety of school quality indicators, including test scores,
            college readiness, and equity data. To verify enrollment eligibility, contact
            the school or district directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyNearbySchools;
