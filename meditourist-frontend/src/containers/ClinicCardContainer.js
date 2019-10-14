import React, { Component } from "react";
import ClinicCard from "../components/ClinicCard";

class ClinicCardContainer extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  generateClinicCards = () => {
    if (this.props.clinic_choices.length !== 0) {
      return this.props.clinic_choices.map((item, index) => {
        return <ClinicCard item={item} key={index} onClick={this.showModal} handleModalScrapeAndGeneration={this.props.handleModalScrapeAndGeneration} />;
      });
    }
  };

  render() {
    return <div>{this.generateClinicCards()}</div>;
  }
}

export default ClinicCardContainer;
