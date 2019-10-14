import React, { Component } from "react";
import ProcedureSelect from "../components/ProcedureSelect";

class InitialSearchContainer extends Component {
  state = {
    country_choices: []
  };

  handleScrapeForCountryChoices = e => {
    e.preventDefault();
    fetch(this.props.BackendURL + "/getcountries", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        procedure: this.props.procedure
      })
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          country_choices: data
        })
      );
  };

  generateCountrySelect = () => {
    if (this.state.country_choices.length !== 0) {
      return (
        <div>
          <label>Select Country</label>
          <select
            value={this.state.selected_country}
            onChange={this.props.handleCountryChange}
          >
            <option>Select Country</option>
            {this.generateCountryOptions()}
          </select>
          <input type="submit" value="Submit" />
        </div>
      );
    }
  };

  generateCountryOptions = () => {
    return this.state.country_choices.names.map((country, index) => {
      let str = country;
      str = str.replace(/\s+/g, "-").toLowerCase();
      return (
        <option key={index} value={str}>
          {country}
        </option>
      );
    });
  };

  render() {
    return (
      <div>
        InitialSearchContainer
        <h2>Welcome, Username</h2>
        <ProcedureSelect
          procedure={this.state.procedure}
          handleProcedureChange={this.props.handleProcedureChange}
          handleScrapeForCountryChoices={(e) => this.handleScrapeForCountryChoices(e)}
        />
        <form onSubmit={this.props.handleScrapeForClinicCards}>
          {this.generateCountrySelect()}
        </form>
      </div>
    );
  }
}

export default InitialSearchContainer;
