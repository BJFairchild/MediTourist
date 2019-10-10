import React, { Component } from "react";
import "./App.css";
import LogInContainer from "./containers/LogInContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  logIn = (userName, password) => {
    fetch(this.props.BackendURL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: userName
      })
    })
      .then(response => response.json())
      .then(data => this.setState({
        currentUser: data}))
        .then(async () => console.log("logged in user", this.state));
  };

  render() {
    
    return <LogInContainer BackendURL={this.props.BackendURL} onLogIn={this.logIn}/>;

  }
}

export default App;
