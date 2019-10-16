import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import {
  GoogleApiWrapper,
  Map,
  InfoWindow,
  Marker,
  GoogleMapReact
} from "google-maps-react";

const mapStyles = {
  width: "60vw",
  height: "60vh"
};

class TripMap extends Component {
  state = {
    center: this.props.center,
    zoom: 13
  };


  render() {
    return (
      <div id="map">
        
        <Map
          google={this.props.google}
          initialCenter={this.state.center}
          style={mapStyles}
          zoom={this.state.zoom}
        >
          <Marker position={this.state.center} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBxEBLD9heggwc6PzbEoBjDS2-Av_saNJM"
})(TripMap);
