import React, { Component } from "react";

class ClinicCard extends Component {

    state = { baseUrl: "https://www.medigo.com/"}

    generateModal = () => {
        let search_term = this.state.baseUrl + this.props.item[1]
        this.props.handleModalScrapeAndGeneration(search_term)
    }

    generatePrice = () => {
        return this.props.item[3] ? <h6>{this.props.item[3]}</h6> : <h6>Please inquire for pricing.</h6>
    }
  render() {
    return (
      <div>
        <h2>{this.props.item[0]}</h2>
        <h4>{this.props.item[2]}</h4>
        {this.generatePrice()}
        <button value={this.props.item[1]} onClick={this.generateModal}>More Information</button>
      </div>
    );
  }
}

export default ClinicCard;
