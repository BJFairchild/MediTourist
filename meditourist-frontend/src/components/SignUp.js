import React, { Component } from 'react'

class SignUp extends Component {
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

      handleSignUp = () => {
        let username = this.state.inputName
        let password = this.state.inputPass
        console.log("username",username)
        console.log("password", password)
        fetch(this.props.BackendURL+'/users',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                user: {
                username: username,
                password: password,
                budget: 0
                }
            })
        })
        .then(response => response.json())
        .then(result => console.log("result",result))
        // .then(response => response.errors? alert("Username already exists."):this.props.onLogIn(this.state.input))
    }

    render(){
        return(
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
            <button onClick={this.handleSignUp}>
          New User
        </button>
            </div>
        )
    }
}

export default SignUp