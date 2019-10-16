import React, { Component } from 'react'
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react'

const mapStyles = {
    width: '60vw',
    height: '90vh'
}


class TripMap extends Component {

    state = {
        center: {
            lat: null,
            lng: null
        },
        zoom: 13
    }

    // generateCoords = () => {
    //     fetch
    // }

    render(){
        return(
            <div> Map?
            {/* {this.generateCoords()} */}
                <Map google={this.props.google}
                initialCenter={this.state.center}
                style={mapStyles} 
                zoom={this.state.zoom}
                />
                    <Marker position={{ lat: this.state.lat, lng: this.state.lng}} />

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(TripMap)