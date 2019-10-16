import React, { Component } from "react";
import "./App.css";
import LogInContainer from "./containers/LogInContainer";
import NavBar from "./components/NavBar";
import InitialSearchContainer from "./containers/InitialSearchContainer";
import ClinicCardContainer from "./containers/ClinicCardContainer";
import TripsContainer from "./containers/TripsContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      procedure: "",
      price: 0,
      us_cost: 0,
      selected_country: "",
      selected_clinic: {
        name: "",
        address: "",
        overview: ""
      },
      clinic_choices: [],
      allTrips: []
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
    console.log("test",e.target.value)
    console.log(e.target.id)
    this.setState({
      procedure: e.target.value
    });
  };

  handleCountryChange = e => {
    this.setState({
      selected_country: e.target.value
    });
  };

  handleScrapeForClinicCards = e => {
    e.preventDefault();
    console.log("scrape for clinic cards");
    console.log("procedure for clinic cards", this.state.procedure);
    console.log("country for clinic cards", this.state.selected_country);

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
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          clinic_choices: data
        })
      );
  };

  handleModalScrapeAndGeneration = (search_term, clinic_name, price) => {
    console.log("search term in app", search_term);

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
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          price: price,
          selected_clinic: {
            name: clinic_name,
            address: data[0],
            overview: data[1]
          }
        })
      )
      .then(async () =>
        console.log("state after clicking modal button", this.state)
      );
  };

  setAllTrips = (data) => {
    this.setState({
      allTrips: data
    })
  }


  render() {
    return (
      <div>
        <LogInContainer
          BackendURL={this.props.BackendURL}
          onLogIn={this.logIn}
        />
        <NavBar state={this.state} setAllTrips={this.setAllTrips} BackendURL={this.props.BackendURL}/>
        <InitialSearchContainer
          procedure={this.state.procedure}
          handleProcedureChange={this.handleProcedureChange}
          handleCountryChange={this.handleCountryChange}
          handleScrapeForClinicCards={e => this.handleScrapeForClinicCards(e)}
          BackendURL={this.props.BackendURL}
        />
        <ClinicCardContainer
          state={this.state}
          BackendURL={this.props.BackendURL}
          clinic_choices={this.state.clinic_choices}
          handleModalScrapeAndGeneration={this.handleModalScrapeAndGeneration}
        />
        <TripsContainer state={this.state} setAllTrips={this.setAllTrips}BackendURL={this.props.BackendURL} />
      </div>
    );
  }
}

export default App;
