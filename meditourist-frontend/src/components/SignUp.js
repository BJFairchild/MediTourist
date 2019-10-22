import React, { Component } from "react";

import {
  Button,
  Container,
  Form,
  Grid,
  Header
} from "semantic-ui-react";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { inputName: "", inputPass: "" };
  }

  handleOnChangeUserName = e => {
    this.setState({
      inputName: e.target.value
    });
  };

  handleOnChangePassword = e => {
    this.setState({
      inputPass: e.target.value
    });
  };

  handleSignUp = () => {
    let username = this.state.inputName;
    let password = this.state.inputPass;
    console.log("username", username);
    console.log("password", password);
    fetch(this.props.BackendURL + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(response => response.json())
      .then(result =>
        this.props.onLogIn(result.user.username, result.user.password)
      );
  };

  handleClick = () => {
    this.props.changeNewUserFlag()
    }

  render() {
    return (

      <div className="login">
        <Grid textAlign="center">
          <Container>
            <Header size="huge">New User</Header>
            <Form size="large">
              <Form.Input
                name="username"
                placeholder="Username"
                type="text"
                onChange={this.handleOnChangeUserName}
                value={this.state.inputName}
              />
              <Form.Input
                name="password"
                placeholder="Password"
                type="password"
                value={this.state.inputPass}
                onChange={this.handleOnChangePassword}
              />
              <Button primary fluid size="large" type="submit" onClick={this.handleSignUp}>
                Sign Up
              </Button>
              <br></br>
              <Button primary fluid size="large" type="submit" onClick={this.handleClick}>
                Returning User
              </Button>
            </Form>
          </Container>
        </Grid>
      </div>

      // <div>
      //   <label>Username</label>
      //   <input
      //     type="text"
      //     value={this.state.inputName}
      //     onChange={this.handleOnChangeUserName}
      //   />
      //   <label>Password</label>
      //   <input
      //     type="text"
      //     value={this.state.inputPass}
      //     onChange={this.handleOnChangePassword}
      //   />
      //   <button onClick={this.handleSignUp}>New User</button>
      // </div>
    );
  }
}

export default SignUp;
