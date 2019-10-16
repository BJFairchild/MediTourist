import React, { Component } from 'react'

class NavBar extends Component{

    fetchUser = () => {
        fetch(this.props.BackendURL + "/user-trips", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            user_id: this.props.state.currentUser["user"]["id"]
          })
        })
          .then(res => res.json())
          .then(async data => this.props.setAllTrips(data))
    }


    render(){
        return(
            <div id="navbar">Navbar
                <div>
                <button onClick={this.fetchUser}>My Trips</button>
                </div>
                <div>
                    <h6>Name</h6>
                    <h6>Budget</h6>
                </div>
                <div>
                <h6>Current Cost</h6>
                </div>
                <div>
                <button>Logout</button>
                </div>
            </div>
        )
    }
}

export default  NavBar