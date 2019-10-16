import React, { Component } from "react";
import ClinicCard from "../components/ClinicCard";

class ClinicCardContainer extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
    console.log("modal flag", this.state);
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("modal flag", this.state);
  };

  generateClinicCards = () => {
    if (this.props.clinic_choices.length !== 0) {
      return this.props.clinic_choices.map((item, index) => {
        return (
          <ClinicCard
            state={this.props.state}
            BackendURL={this.props.BackendURL}
            item={item}
            key={index}
            onClick={this.showModal}
            handleModalScrapeAndGeneration={
              this.props.handleModalScrapeAndGeneration
            }
          />
        );
      });
    }
  };

  render() {
    return <div>{this.generateClinicCards()}</div>;
  }
}

export default ClinicCardContainer;
