import React from 'react';
import styles from './PropertyNearbySchools.module.scss';

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
    return (
      <tr key={index}>
        <td>{data.ratings.great_schools_rating}</td>
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
      <div className={styles.heading}>
        <h2>Nearyby Schools</h2>
        <FontAwesomeIcon icon={faSchool} />
      </div>
      <table>
        <tbody>
          <tr>
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
          *School data provided by National Center for Education Statistics, Pitney Bowes,
          and GreatSchools. Intended for reference only. The GreatSchools Rating is based
          on a variety of school quality indicators, including test scores, college
          readiness, and equity data. To verify enrollment eligibility, contact the school
          or district directly.
        </p>
      </div>
    </div>
  );
};

export default PropertyNearbySchools;
