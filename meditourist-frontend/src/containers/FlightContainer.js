import React, { Component } from 'react'

class FlightContainer extends Component {

    formatSearchTerms = () => {
        let address = this.props.address
        let country = address.split(' ').pop().replace(/[^\w\s]/gi, '')
        let city = address.substring(0, address.lastIndexOf(',')).split(' ').pop()
        console.log(address)
        console.log(country)
        console.log(city)
        
    }

    render(){
        return(
            <div> Flight
                {this.formatSearchTerms()}
                

            </div>
        )
    }
}

export default FlightContainer