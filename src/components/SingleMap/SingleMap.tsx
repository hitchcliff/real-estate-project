import { DivIcon } from 'leaflet';
import React from 'react';
import styles from './SingleMap.module.scss';
import './SingleMap.scss';

import RenderDOMServer from 'react-dom/server';

import { Marker, Popup } from 'react-leaflet';
import CustomIcon from '../PropertyDisplayMap/CustomIcon';
import { formatNumber } from '../../helpers/util';

interface ISingleMapProp<T> {
  property?: T | any;
}
const SingleMap = <T,>(props: ISingleMapProp<T>) => {
  const { property } = props;

  // custom marker jsx icon
  const customMarkerDivIcon = (item: T) => {
    const marker = new DivIcon({
      className: 'custom-icon',
      html: RenderDOMServer.renderToString(<CustomIcon<{ items: any }> items={item} />),
    });
    return marker;
  };

  return (
    <div className="mini-map">
      <Marker
        position={[property.lat ? property.lat : 0, property.lon ? property.lon : 0]}
        icon={customMarkerDivIcon(property)}
      >
        <Popup className={styles.popup}>
          <div className={styles.details}>
            <h4>
              {property.line}, {property.neighborhood_name}, {property.city}
            </h4>
            <span>{property.price ? formatNumber(property.price) : property.price}</span>
          </div>
          <div className={styles.image}>
            {property.prop_status === 'sold' &&
            typeof property.prop_status !== 'undefined' ? (
              <img src={property.sold_photos} alt={property.line} />
            ) : (
              <img
                src={property.photos ? property.photos : property.thumbnail}
                alt={property.line}
              />
            )}
          </div>
        </Popup>
      </Marker>
    </div>
  );
};

export default SingleMap;
