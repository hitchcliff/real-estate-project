import React from 'react';
import RenderDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import styles from './HomesDisplayMap.module.scss';

// geojson
import NYC from '../../geojson/nyc.json';

// map
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { MapAddress } from '../../types/ListForRent.types';
import { Icon, DivIcon } from 'leaflet';
import CustomIcon from './CustomIcon';

interface IHomesDisplayMapProp {
  address: MapAddress[];
}

const HomesDisplayMap: React.FC<IHomesDisplayMapProp> = (prop) => {
  const { address } = prop;
  const { features }: any = NYC;

  const pos = {
    lat: 40.73061, // new york
    lng: -73.935242,
  };

  // custom marker
  const customMarkerIcon = new Icon({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  // custom marker jsx icon
  const customMarkerDivIcon = new DivIcon({
    className: 'custom-icon',
    html: RenderDOMServer.renderToString(<CustomIcon />),
  });

  // marker
  const mapMarker = address.map((item, index) => (
    <Marker
      key={index}
      position={[item.lat, item.lon]}
      icon={customMarkerDivIcon}
    >
      <Popup>
        <h4>
          {item.line}, {item.neighborhood_name}, {item.city}
        </h4>
      </Popup>
    </Marker>
  ));

  // feature
  const onEachFeature = (map: any, layer: any) => {
    const { options } = layer;
    options.fillOpacity = 0.5;
    options.fillColor = '#a7ff83';
    options.weight = 0;
    console.log(layer);
  };

  return (
    <div className={styles.container}>
      <Map zoom={10} center={[pos.lat, pos.lng]}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={features} onEachFeature={onEachFeature}>
          {mapMarker}
        </GeoJSON>
      </Map>
    </div>
  );
};

export default HomesDisplayMap;
