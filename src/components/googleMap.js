import React ,{Component} from 'react';
import GoogleMapReact from 'google-map-react';
import appnaviMarker from '../images/appnaviMarker.png';

const Marker = ({ text }) => <div><img src = {text} alt ="Marker" style ={{width:'100%'}}/></div>;

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

export default SimpleMap;


