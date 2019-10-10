import React, { Component } from "react";
import "./App.css";
import LogInContainer from "./containers/LogInContainer";
import NavBar from "./components/NavBar"
import InitialSearchContainer from "./containers/InitialSearchContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
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
        username: userName,
        password: passWord
      })
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          currentUser: data
        })
      )
      .then(async () => console.log("logged in user", this.state));
  };

  render() {
    return (
      <div>
      <LogInContainer BackendURL={this.props.BackendURL} onLogIn={this.logIn} />
      <NavBar />
      <InitialSearchContainer />

      </div>
    );
  }
}

export default App;
