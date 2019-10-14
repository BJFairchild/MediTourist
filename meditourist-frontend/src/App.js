import React, { Component } from "react";
import "./App.css";
import LogInContainer from "./containers/LogInContainer";
import NavBar from "./components/NavBar";
import InitialSearchContainer from "./containers/InitialSearchContainer";
import ClinicCardContainer from './containers/ClinicCardContainer'

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      procedure: "",
      price: 0,
      us_cost: 0,
      selected_country: "",
      selected_clinic: [],
      clinic_choices: [],
    };
  }

  logIn = (userName, passWord) => {
    fetch(this.props.BackendURL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: passWord
        }
      })
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          currentUser: data
        })
      )
      .then(async () => {
        localStorage.setItem("token", this.state.currentUser.jwt);
        console.log("logged in user", this.state.currentUser);
      });
  };

  handleProcedureChange = e => {
    this.setState({
      procedure: e.target.value
    });
  };

  handleCountryChange = e => {
    this.setState({
      selected_country: e.target.value
    });
  };



  handleScrapeForClinicCards = (e) => {
    e.preventDefault()
    console.log("scrape for clinic cards")
    console.log("procedure for clinic cards", this.state.procedure)
    console.log("country for clinic cards", this.state.selected_country)

    fetch(this.props.BackendURL + "/getclinics", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        procedure: this.state.procedure,
        country: this.state.selected_country
      })
    }).then(res => res.json())
    .then(data => this.setState({
      clinic_choices: data
  }))};

  handleModalScrapeAndGeneration = (search_term) => {
    console.log("search term in app",search_term)
    
    fetch(this.props.BackendURL + "/getclinicoverview", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        searchterm: search_term
      })
    }).then(res => res.json())
    .then(data => console.log("results", data))
  }

  render() {
    return (
      <div>
        <LogInContainer
          BackendURL={this.props.BackendURL}
          onLogIn={this.logIn}
        />
        <NavBar />
        <InitialSearchContainer
          procedure={this.state.procedure}
          handleProcedureChange={this.handleProcedureChange}
          handleCountryChange={this.handleCountryChange}
          handleScrapeForClinicCards={(e) => this.handleScrapeForClinicCards(e)}
          BackendURL={this.props.BackendURL}
        />
        <ClinicCardContainer clinic_choices={this.state.clinic_choices} handleModalScrapeAndGeneration={this.handleModalScrapeAndGeneration}/>
      </div>
    );
  }
}

export default App;
