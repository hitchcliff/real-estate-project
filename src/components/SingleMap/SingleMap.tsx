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
  if (!property) return <></>;
  const { line, neighborhood_name, city, price, thumbnail, lat, lon } = property;

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
      <Marker position={[lat, lon]} icon={customMarkerDivIcon(property)}>
        <Popup className={styles.popup}>
          <div className={styles.details}>
            <h4>
              {line}, {neighborhood_name}, {city}
            </h4>
            <span>{price ? formatNumber(price) : price}</span>
          </div>
          <div className={styles.image}>
            <img src={thumbnail} alt={line} />
          </div>
        </Popup>
      </Marker>
    </div>
  );
};

export default SingleMap;
