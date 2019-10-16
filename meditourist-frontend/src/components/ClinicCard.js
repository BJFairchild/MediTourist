import React, { Component } from "react";
import ModalScroll from './ModalScroll'

class ClinicCard extends Component {

  showModal = () => {
    return <ModalScroll BackendURL={this.props.BackendURL} state={this.props.state}handleModalScrapeAndGeneration={
        this.props.handleModalScrapeAndGeneration} item={this.props.item}/>;
  };

 

//   generateModal = () => {
//       console.log("clicking gen modal")
//     let search_term = this.state.baseUrl + this.props.item[1];
//     let clinic_name = this.props.item[0];
//     let price = this.props.item[3];
//     this.props.handleModalScrapeAndGeneration(search_term, clinic_name, price);
//   };

  generatePrice = () => {
    return this.props.item[3] ? (
      <h6>{this.props.item[3]}</h6>
    ) : (
      <h6>Please inquire for pricing.</h6>
    );
  };
  render() {
    return (<div>
      <div>
        <h2>{this.props.item[0]}</h2>
        <h4>{this.props.item[2]}</h4>
        {this.generatePrice()}
        {/* <button value={this.props.item[1]} onClick={this.generateModal}>
          More Information
        </button> */}
        <div>{this.showModal()}</div>
      </div>
      </div>
    );
  }
}

export default ClinicCard;
