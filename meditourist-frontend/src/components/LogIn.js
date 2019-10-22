import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  Header
} from "semantic-ui-react";

class LogIn extends Component {
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

  handleSignIn = () => {
    let username = this.state.inputName;
    let password = this.state.inputPass;
    this.props.onLogIn(username, password);
  };

  handleClick = () => {
    this.props.changeNewUserFlag()
    }

  render() {
    return (

      <div className="login">
        <Grid textAlign="center">
          <Container>
            <Header size="huge">Please Sign In</Header>
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
              <Button primary fluid size="large" type="submit" onClick={this.handleSignIn}>
                Sign in
              </Button><br></br>
              <Button primary fluid size="large" type="submit" onClick={this.handleClick}>
                New User
              </Button>
              
            </Form>
          </Container>
        </Grid>
      </div>

    );
  }
}

export default LogIn;
