import React  from 'react';
import GoogleMapReact from 'google-map-react';
//import appnaviMarker from '../images/appnaviMarker.png';
import './marker.css';

const GoogleMaps = (props ) => {
  const renderMarkers = (map, maps) => {
   var marker = new maps.Marker({
   position: { lat: props.latitude, lng: props.longitude },
   map:map,
   title: 'Hello World!'
   });
   return marker;
  };
 
  return (
    <div style={{ height: '50vh', width: '100%' }}>
     <GoogleMapReact
       bootstrapURLKeys={{ key: 'AIzaSyASIEu5tFEl66Dcm7JR6NDp3jSUe8Mzuxs' }}
       defaultCenter={{ lat: props.latitude, lng: props.longitude }}
       defaultZoom={16}
       yesIWantToUseGoogleMapApiInternals
       onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
     >
     </GoogleMapReact>
    </div>
  );
 };
 
 export default GoogleMaps;

