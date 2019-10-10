import React, { Component } from 'react'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'


class LogInContainer extends Component {

    
    render(){
        return(
            <div id="loginContainer">
                <LogIn onLogIn={this.props.onLogIn}/>
                <SignUp onLogIn={this.props.onLogIn} BackendURL={this.props.BackendURL}/>
            </div>
        )
    }
        
}

export default LogInContainer