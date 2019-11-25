import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import {
  GoogleApiWrapper,
  Map,
  Marker,
} from "google-maps-react";

const mapStyles = {
  width: "50vw",
  height: "70vh",
  margin: "0vw 25vw 0vw 25vw"
};

class TripMap extends Component {
  state = {
    center: this.props.center,
    zoom: 12
  };


  render() {
    return (
      <div id="map">
        <br></br>
        
        <Map
          className="test"
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
