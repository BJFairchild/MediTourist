import React, { Component } from "react";
import ModalScroll from "./ModalScroll";
import { Button, Card, Image } from "semantic-ui-react";

class ClinicCard extends Component {
  showModal = () => {
    return (
      <ModalScroll
        fetchUser={this.props.fetchUser}
        BackendURL={this.props.BackendURL}
        cityCountry={this.props.item[2]}
        state={this.props.state}
        handleModalScrapeAndGeneration={
          this.props.handleModalScrapeAndGeneration
        }
        item={this.props.item}
      />
    );
  };

  generatePrice = () => {
    return this.props.item[3] ? (
      <Card.Description>{this.props.item[3]}</Card.Description>
    ) : (
      <Card.Description>Please inquire for pricing.</Card.Description>
    );
  };
  render() {
    return (
        <Card><Card.Content>
          <Card.Header>{this.props.item[0]}</Card.Header>
          <Card.Description>{this.props.item[2]}</Card.Description>
          {this.generatePrice()}
          <div>{this.showModal()}</div>
          </Card.Content>
        </Card>
    );
  }
}

export default ClinicCard;
