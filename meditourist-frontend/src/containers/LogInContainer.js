import React, { Component } from 'react'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'


class LogInContainer extends Component {

    state = {
        newUser: false
    }
    
    changeNewUserFlag = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    generateLogIn = () => {
        return this.state.newUser ? (<SignUp changeNewUserFlag={this.changeNewUserFlag} onLogIn={this.props.onLogIn} BackendURL={this.props.BackendURL}/>) : (<LogIn changeNewUserFlag={this.changeNewUserFlag} onLogIn={this.props.onLogIn}/>)
    }

    render(){
        return(
            <div id="loginContainer">
                <div className="title">Medi-Tourist</div>
                {this.generateLogIn()}
            </div>
        )
    }
        
}

export default LogInContainer