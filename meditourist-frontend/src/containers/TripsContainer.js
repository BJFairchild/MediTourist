import React, { Component } from "react";
import TripCard from "../components/TripCard";
import TripMap from "../components/TripMap"

class TripsContainer extends Component {
  state= {
      showMap: false
  }
  generateTripCards = () => {
    if (this.props.state.allTrips.length === 0) {
      return <div>You currently have no saved trips.</div>;
    } else {
      return this.props.state.allTrips.map((item, index) => {
        return <TripCard showMap={this.showMap} key={index} item={item} state={this.props.state} setAllTrips={this.props.setAllTrips}BackendURL={this.props.BackendURL}/>;
      });
    }
  };

  generateMap = () => {
      if (this.state.showMap !== false){
          return <TripMap BackendURL={this.props.BackendURL} state={this.props.state}/>
      } 
      
  }

  showMap = () => {
      console.log("show me a map")
      this.setState({
          showMap: true
      })
  }

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
