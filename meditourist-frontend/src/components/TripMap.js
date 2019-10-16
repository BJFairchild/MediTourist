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
    center: {
      lat: 47.444,
      lng: -122.042
    },
    zoom: 6
  };

  generateCoords = () => {
      console.log("address",this.props.state.selected_clinic["address"])
    //   fetch(this.props.BackendURL + '/getcoords', {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //       },
    //       body: JSON.stringify({
    //           address: this.props.state.selected_clinic["address"]
    //       })
    //   }).then(res => res.json())
    //   .then(data => console.log(data))
  }

  render() {
    return (
      <div id="map">
        {this.generateCoords()}
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
