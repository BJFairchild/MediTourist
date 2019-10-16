import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";

class TripCard extends Component {



    deleteTrip = (e) => {
        console.log(e.target.value)
        console.log("userid", this.props.state.currentUser["user"]["id"])
        fetch(this.props.BackendURL + '/deletetrip', {
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

        }).then(res => res.json())
        .then(data => this.props.setAllTrips(data))

    }

    handleClick = () => {
        this.props.showMap()
    }


  render() {
    let {
        id,
      address,
      clinic_name,
      clinic_overview,
      country,
      price,
      procedure
    } = this.props.item;


    return (<div>
      <div>
        <Card>
          <Card.Content>
              <Image
            floated='right' size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>My {procedure} Trip</Card.Header>
            <Card.Meta>Destination: {country}</Card.Meta>
            <Card.Description>Price: ${price}</Card.Description>
          </Card.Content>
          <Card.Content extra>
              <div className='ui two buttons'>
                  <Button onClick={this.handleClick} basic color='green'>
                      More Info
                  </Button>
                  <Button basic color='red' value={id} onClick={this.deleteTrip}>
                      Delete Trip
                  </Button>
              </div>
          </Card.Content>
        </Card> 
      </div>
      <br></br>
      </div>
    );
  }
}

export default TripCard;
