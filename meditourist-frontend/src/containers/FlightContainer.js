import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";

class FlightContainer extends Component {
  openFlightDetails = () => {
    let url = this.props.flightData.url;
    window.open(url, "_blank");
  };

  populateFlight = () => {
    console.log("state of flight", this.props.flightData.price);
    if (this.props.flightData.price) {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Flight to {this.props.city}</Card.Header>
            <Card.Header>
              Airline(s): {this.props.flightData.airlines}
            </Card.Header>
            <Card.Header>Price: ${this.props.flightData.price}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Button basic color="blue" onClick={this.openFlightDetails}>
              View Flight Details
            </Button>
          </Card.Content>
        </Card>
      );
    }
  };

  render() {
    return <div>{this.populateFlight()}</div>;
  }
}

export default FlightContainer;
