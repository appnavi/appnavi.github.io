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

/*class SimpleMap extends Component {
  render(){

    const  defaultProps = {
     
      center: {
          lat: 34.5457708,
          lng: 135.505894
      },
      zoom: 14
    };

    return (
      <div style={{'width':'50vh','height':'50%'}}>
      <GoogleMapReact
        bootstrapURLKeys={'AIzaSyASIEu5tFEl66Dcm7JR6NDp3jSUe8Mzuxs' }
        defaultCenter={{lat: this.props.lat,long: this.props.lng}}
        defaultZoom={15}>
        <Marker lat={this.props.lat} lng={this.props.lng} />
      </GoogleMapReact>
      </div>
    );
  
  }
  }

export default SimpleMap 


/*const Marker = ({ text }) => <div><img src = {text} alt ="Marker" style ={{width:'100%'}}/></div>;

const Map = props => {
  return (
    <GoogleMapReact
     bootstrapURLKeys={{ props.key }}
     defaultCenter={{lat: props.lat, lng: props.lng}}
     defaultZoom={props.zoom}>

       {/* This is the missing part in docs:
         *
         * Basically, you only need to add a Child Component that
         * takes 'lat' and 'lng' Props. And that Component should
         * returns a text, image, super-awesome-pin (aka, your marker).
         *
         */
   
   /*      <Marker lat={props.lat} lng={props.lng} />
    </GoogleMapReact>
  )
}

const Marker = props => {
  return <div className="SuperAwesomePin"></div>
}

/*renderMarkers() {
  let marker = new maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!'
}

render() {
  return (
      <div style={{'width':800,'height':800}}>
          <GoogleMap
              bootstrapURLKeys={{key: settings.googleMapApiKey}}
              defaultZoom={13}
              defaultCenter={{ 
                  lat: this.props.user.profile.location.coordinates[1], 
                  lng: this.props.user.profile.location.coordinates[0]
              }}
              onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
              yesIWantToUseGoogleMapApiInternals
          >
          </GoogleMap>
      </div>
  );
}

class SimpleMap extends Component {
  static defaultProps = {
     
    center: {
        lat: 34.5457,
        lng: 135.5058
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyASIEu5tFEl66Dcm7JR6NDp3jSUe8Mzuxs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        
          <Marker
            lat={34.5457708}
            lng={135.505894}
            text = {appnaviMarker}
            >
    </Marker>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;*/


