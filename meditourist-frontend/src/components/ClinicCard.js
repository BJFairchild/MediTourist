import React, { Component } from "react";
import ModalScroll from "./ModalScroll";

class ClinicCard extends Component {
  showModal = () => {
    return (
      <ModalScroll
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
      <h6>{this.props.item[3]}</h6>
    ) : (
      <h6>Please inquire for pricing.</h6>
    );
  };
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.item[0]}</h2>
          <h4>{this.props.item[2]}</h4>
          {this.generatePrice()}
          <div>{this.showModal()}</div>
        </div>
      </div>
    );
  }
}

export default ClinicCard;
