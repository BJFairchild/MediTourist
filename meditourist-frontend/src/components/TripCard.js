import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import TripMap from "../components/TripMap";
import FlightContainer from "../containers/FlightContainer"


class TripCard extends Component {
  state = {
    showMap: false,
    center: {},
    flight_cost: 0
  };

  generateMap = () => {
    if (this.state.showMap) {
      return (
        <TripMap
          BackendURL={this.props.BackendURL}
          center={this.state.center}
          item={this.props.item}
          state={this.props.state}
        />
      );
    }
  };

  showMap = () => {
    fetch(this.props.BackendURL + "/getcoords", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        address: this.props.item.address
      })
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          center: data.latlong,
          showMap: true
        })
      );
  };

  deleteTrip = e => {
    console.log(e.target.value);
    console.log("userid", this.props.state.currentUser["user"]["id"]);
    fetch(this.props.BackendURL + "/deletetrip", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: e.target.value,
        user_id: this.props.state.currentUser["user"]["id"]
      })
    })
      .then(res => res.json())
      .then(data => this.props.setAllTrips(data));
  };

  hideMap = () => {
    this.setState({
      showMap: false
    });
  };

  toggleShowMapButton = () => {
    return this.state.showMap === false ? (
      <Button onClick={this.showMap} basic color="green">
        Show Map
      </Button>
    ) : (
      <Button onClick={this.hideMap} basic color="green">
        Hide Map
      </Button>
    );
  };

  isFlightCostSet = () => {
    let {
      id,
      address,
      clinic_name,
      clinic_overview,
      country,
      price,
      procedure,
      savings,
      flag_url
    } = this.props.item;

    return this.state.flight_cost === 0 ? (
      <Card.Content>
        <Image floated="right" size="mini" src={flag_url} alt="flag" />
        <Card.Header>My {procedure} Trip</Card.Header>
        <Card.Meta>Destination: {country}</Card.Meta>
        <Card.Description>Procedure: ${price}</Card.Description>
        <Card.Description>Savings: ${savings}</Card.Description>
        <Button onClick={this.createFlight}>Find a Flight</Button>
      </Card.Content>
    ) : (
      <Card.Content>
        <Image floated="right" size="mini" src={flag_url} alt="flag" />
        <Card.Header>My {procedure} Trip</Card.Header>
        <Card.Meta>Destination: {country}</Card.Meta>
        <Card.Description>Procedure: ${price}</Card.Description>
        <Card.Description>Flight: ${this.state.flight_cost}</Card.Description>
        <Card.Description>Savings: ${savings}</Card.Description>
      </Card.Content>
    );
  };

  createFlight = () => {
      console.log("clicking create flight")
      let country = this.props.item.country

  }

  render() {
    return (
      <div>
        <div>
          <Card>
            {this.isFlightCostSet()}
            <Card.Content extra>
              <div className="ui two buttons">
                {this.toggleShowMapButton()}
                <Button basic color="red" value={this.props.item.id} onClick={this.deleteTrip}>
                  Delete Trip
                </Button>
              </div>
            </Card.Content>
          </Card>
          {this.generateMap()}
        </div>
        <FlightContainer address={this.props.item.address}/>
        <br></br>
      </div>
    );
  }
}

export default TripCard;
