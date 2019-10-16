import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import TripMap from "../components/TripMap";

class TripCard extends Component {
  state = {
    showMap: false,
    center: {}
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

  handleClick = () => {
    this.showMap();
  };

  render() {
    let {
      id,
      address,
      clinic_name,
      clinic_overview,
      country,
      price,
      procedure,
      savings
    } = this.props.item;

    return (
      <div>
        <div>
          <Card>
            <Card.Content>
              <Image floated="right" size="mini" src="" alt="flag" />
              <Card.Header>My {procedure} Trip</Card.Header>
              <Card.Meta>Destination: {country}</Card.Meta>
              <Card.Description>Price: ${price}</Card.Description>
              <Card.Description>Savings: ${savings}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button onClick={this.handleClick} basic color="green">
                  Show Map
                </Button>
                <Button basic color="red" value={id} onClick={this.deleteTrip}>
                  Delete Trip
                </Button>
              </div>
            </Card.Content>
          </Card>
          {this.generateMap()}
        </div>
        <br></br>
      </div>
    );
  }
}

export default TripCard;
