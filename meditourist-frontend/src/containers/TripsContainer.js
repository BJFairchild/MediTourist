import React, { Component } from "react";
import TripCard from "../components/TripCard";

class TripsContainer extends Component {
  
  generateTripCards = () => {
    if (this.props.state.allTrips.length === 0) {
      return <div>You currently have no saved trips.</div>;
    } else {
      return this.props.state.allTrips.map((item, index) => {
        return <TripCard showMap={this.showMap} key={index} item={item} state={this.props.state} setAllTrips={this.props.setAllTrips}BackendURL={this.props.BackendURL}/>;
      });
    }
  };

  

  render() {
    return (
      <div>
        Trips Container
        {this.generateTripCards()}
        

        
      </div>
    );
  }
}

export default TripsContainer;
