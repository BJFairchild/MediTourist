import React, { Component } from 'react'

class NavBar extends Component{



    render(){
        return(
            <div id="navbar">Navbar
                <div>
                <button>My Trips</button>
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