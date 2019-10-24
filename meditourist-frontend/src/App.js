import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
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
      redirect: null,
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
      allTrips: [],
      modal_is_loading: false
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
        console.log("user logged in");
        this.props.history.push("/user/search/clinics");
      });
  };

  logOut = () => {
    console.log("logging out");
    this.setState({
      redirect: null,
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
    });
  };

  handleProcedureChange = e => {
    console.log("price", parseInt(e.target.value.slice(0, 5)));
    this.setState({
      procedure: e.target.value.slice(5),
      us_cost: e.target.value.slice(0, 5)
    });
  };

  handleCountryChange = e => {
    this.setState({
      selected_country: e.target.value
    });
  };

  handleScrapeForClinicCards = e => {
    //handle the 'select country' for country in the cheapest option search
    e.preventDefault();
    if (
      this.state.selected_country &&
      this.state.selected_country !== "Select Cheapest"
    ) {
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
    } else {
      fetch(this.props.BackendURL + "/getcheapest", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          procedure: this.state.procedure
        })
      })
        .then(res => res.json())
        .then(data =>
          this.setState({
            clinic_choices: data
          })
        );
    }
  };
  modalFlagChange = () => {
    this.setState({
      modal_is_loading: true
    })
  }

  handleModalScrapeAndGeneration = (search_term, clinic_name, price) => {
    console.log("modal loading should be false",this.state.modal_is_loading)
    this.modalFlagChange()
    console.log(this.state.modal_is_loading)
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
          modal_is_loading: false,
          price: price,
          selected_clinic: {
            name: clinic_name,
            address: data[0],
            overview: data[1]
          }
        })
      )
      .then(async () => {
        console.log("state after modal generation", this.state);
      });
  };

  setAllTrips = data => {
    console.log("setting all trips");
    this.setState({
      allTrips: data
    });
  };

  handleRedirect = () => {
    if (
      !this.state.currentUser &&
      this.state.redirect === null &&
      window.location.pathname !== "/login"
    ) {
      this.setState({ redirect: "/login" });
    }
    if (!!this.state.redirect) {
      let temp = this.state.redirect;
      this.setState({ redirect: null });
      return <Redirect to={`${temp}`} />;
    } else {
      return null;
    }
  };

  fetchUser = () => {
    console.log("fetching user");
    fetch(this.props.BackendURL + "/user-trips", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.currentUser["user"]["id"]
      })
    })
      .then(res => res.json())
      .then(data => this.setAllTrips(data))
      .then(this.props.history.push("/user/trips"));
  };

  resetState = () => {
    this.setState({
      currentUser: this.state.currentUser,
      clinic_choices: []
    })
    this.props.history.push("/user/search/clinics")
  }

  render() {
    return (
      <div className="bodyTest">
        {this.handleRedirect()}
        <Route path="/login">
          <LogInContainer
            BackendURL={this.props.BackendURL}
            onLogIn={this.logIn}
          />
        </Route>

        <Route path="/user">
          <NavBar
          resetState={this.resetState}
            fetchUser={this.fetchUser}
            state={this.state}
            logOut={this.logOut}
            setAllTrips={this.setAllTrips}
            BackendURL={this.props.BackendURL}
          />
        </Route>

        <Route path="/user/search">
          <InitialSearchContainer
            state={this.state}
            procedure={this.state.procedure}
            handleProcedureChange={this.handleProcedureChange}
            handleCountryChange={this.handleCountryChange}
            handleScrapeForClinicCards={e => this.handleScrapeForClinicCards(e)}
            BackendURL={this.props.BackendURL}
          />
        </Route>

        <Route path="/user/search/clinics">
          <ClinicCardContainer
            fetchUser={this.fetchUser}
            state={this.state}
            BackendURL={this.props.BackendURL}
            clinic_choices={this.state.clinic_choices}
            handleModalScrapeAndGeneration={this.handleModalScrapeAndGeneration}
          />
        </Route>

        <Route path="/user/trips">
          <TripsContainer
            state={this.state}
            setAllTrips={this.setAllTrips}
            BackendURL={this.props.BackendURL}
          />
        </Route>
      </div>
    );
  }
}

export default withRouter(App);
