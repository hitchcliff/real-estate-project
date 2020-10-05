import React from 'react';
import RenderDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import styles from './PropertyDisplayMap.module.scss';
import cx from 'classnames';

// components
import SingleMap from '../SingleMap/SingleMap';

// geojson
import NYC from '../../geojson/nyc.json';

// map
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import CustomIcon from './CustomIcon';

// helpers
import { formatNumber } from '../../helpers/util';

// types
import { MapAddress } from '../../types/Rent.types';

interface IPropertyDisplayMapProp<T> {
  address: MapAddress[];
  types?: T | any;
  property?: T;
}

const PropertyDisplayMap = <T,>(prop: IPropertyDisplayMapProp<T>) => {
  const { address, types, property } = prop;
  const { features }: any = NYC;
  const tile = `https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=${process.env.REACT_APP_MAP_KEY}`;

  const pos = {
    lat: 40.73061, // new york
    lng: -73.935242,
  };

  // custom marker jsx icon
  const customMarkerDivIcon = (item: MapAddress) => {
    const marker = new DivIcon({
      className: 'custom-icon',
      html: RenderDOMServer.renderToString(<CustomIcon items={item} />),
    });
    return marker;
  };

  // marker
  const mapMarker = address.map((item: MapAddress, index) => {
    return (
      <Marker
        key={index}
        position={[item.lat ? item.lat : 0, item.lon ? item.lon : 0]}
        icon={customMarkerDivIcon(item)}
      >
        <Popup className={styles.popup}>
          <div className={styles.details}>
            <h4>
              {item.line}, {item.neighborhood_name}, {item.city}
            </h4>
            <span>{item.price ? formatNumber(item.price) : item.price}</span>
          </div>
          <div className={styles.image}>
            {types === 'sold' && typeof types !== 'undefined' ? (
              <img src={item.sold_photos} alt={item.line} />
            ) : (
              <img src={item.photos ? item.photos : item.thumbnail} alt={item.line} />
            )}
          </div>
        </Popup>
      </Marker>
    );
  });

  const style = {
    weight: 3,
    fillOpacity: 0,
    backgroundColor: 'red',
    borderColor: 'green',
  };

  return (
    <div className={cx(styles.container, 'marker')}>
      <Map zoom={11} maxZoom={15} minZoom={11} center={[pos.lat, pos.lng]}>
        <TileLayer url={tile} />
        <GeoJSON style={style} data={features}>
          {address ? mapMarker : <SingleMap<T> property={property} />}
        </GeoJSON>
      </Map>
    </div>
  );
};

export default PropertyDisplayMap;
