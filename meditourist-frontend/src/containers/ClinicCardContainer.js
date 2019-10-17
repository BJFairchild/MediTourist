import React, { Component } from "react";
import ClinicCard from "../components/ClinicCard";

class ClinicCardContainer extends Component {
  

  generateClinicCards = () => {
    if (this.props.clinic_choices.length !== 0) {
      return this.props.clinic_choices.map((item, index) => {
        return (
          <ClinicCard
            state={this.props.state}
            BackendURL={this.props.BackendURL}
            item={item}
            key={index}
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
