import React, { Component } from "react";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = { inputName: "", inputPass: "" };
  }

  handleOnChangeUserName = e => {
    this.setState({
      inputName: e.target.value,
    });
  };

  handleOnChangePassword = e => {
    this.setState({
      inputPass: e.target.value,
    });
  };

  handleSignIn = () => {
    let username = this.state.inputName;
    let password = this.state.inputPass
    this.props.onLogIn(username, password)
  };

  render() {
    return (
      <div>
          <label>Username</label>
        <input
          type="text" 
          value={this.state.inputName}
          onChange={this.handleOnChangeUserName}
        />
        <label>Password</label>
        <input
          type="text" 
          value={this.state.inputPass}
          onChange={this.handleOnChangePassword}
        />
        <button id="signInBtn" onClick={this.handleSignIn}>
          Sign In
        </button>
      </div>
    );
  }
}

export default LogIn;
