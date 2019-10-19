import React, { Component } from 'react'

class FlightContainer extends Component {

    getFlight = () => {
        console.log(this.props.city)
        console.log(this.props.country)
        
    }

    render(){
        return(
            <div> Flight
                {this.getFlight()}
                

            </div>
        )
    }
}

export default FlightContainer