import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import TripMap from "../components/TripMap";
import FlightContainer from "../containers/FlightContainer";
import TravelLoaderHOC from '../HOC/TravelLoaderHOC'

class TripCard extends Component {
  state = {
    showMap: false,
    center: {},
    flight_clicked: false,
    flight_data: {
      airlines: "",
      price: 0,
      url: ""
    }
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
    this.resetPrice()
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

  resetPrice = () => { // CHECK TO SEE IF THIS WORKS
    this.setState({
      flight_data: {
        airlines: "",
        price: 0,
        url: ""
      }
    })
  }

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

    return this.state.flight_data.price === 0 ? (
      <Card.Content>
        <Image floated="right" size="mini" src={flag_url} alt="flag" />
        <Card.Header>{procedure} Trip</Card.Header>
        <Card.Meta>Destination: {country}</Card.Meta>
        <Card.Description>US Cost: ${this.calculateUSCost()}</Card.Description>
        <Card.Description>Procedure: ${price}</Card.Description>
        <Card.Description>Savings: ${savings}</Card.Description><br></br>
        <Button basic color="blue"onClick={this.createFlight}>Find a Flight</Button>
      </Card.Content>
    ) : (
      <Card.Content>
        <Image floated="right" size="mini" src={flag_url} alt="flag" />
        <Card.Header>{procedure} Trip</Card.Header>
        <Card.Meta>Destination: {country}</Card.Meta>
        <Card.Description>US Cost: ${this.calculateUSCost()}</Card.Description>
        <Card.Description>Procedure: ${price}</Card.Description>
        <Card.Description>
          Flight: ${this.state.flight_data.price}
        </Card.Description>
        <Card.Description>Savings: ${this.calculateSavings()}</Card.Description>
      </Card.Content>
    );
  };
  calculateUSCost = () => {
    return ((parseInt(this.props.item.savings) + parseInt(this.props.item.price)))
  }

  calculateSavings = () => {
    return (
      parseInt(this.props.item.savings) - parseInt(this.state.flight_data.price)
    );
  };

  createFlight = () => {
    this.setFlightFlag()
    console.log("clicking create flight");
    let country = this.props.item.country;
    let city = this.props.item.destination_city;
    fetch(this.props.BackendURL + "/getflights", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        city: city,
        country: country
      })
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          flight_data: {
            airlines: data[0],
            price: data[1],
            url: data[2]
          }
        })
      );
  };

  setFlightFlag = () => {
    this.setState({
      flight_clicked: true
    })
  }

  generateFlightContainer = () => {
    return this.state.flight_clicked ? (<FlightContainer
      flightData={this.state.flight_data}
      country={this.props.item.country}
      city={this.props.item.destination_city}
      />) : null
  }

  render() {
    return (
      <div>
        <div className="trips">
          <Card>
            {this.isFlightCostSet()}
            <Card.Content extra>
              <div className="ui two buttons">
                {this.toggleShowMapButton()}
                <Button
                  basic
                  color="red"
                  value={this.props.item.id}
                  onClick={this.deleteTrip}
                >
                  Delete Trip
                </Button>
              </div>
            </Card.Content>
          </Card>
        {this.generateFlightContainer()}
          </div>
          <div>{this.generateMap()}</div>
        <br></br>
      </div>
    );
  }
}

export default TripCard;
