import React from 'react';
import GoogleMapReact from 'google-map-react';

export default (props) => {
  return (
    <div style={{ height: '150px', width: '100%' }}>
      <GoogleMapReact
      defaultZoom={12}
      defaultCenter={{lat : props.lat, lng: props.lon}} />
    </div>
  );
}