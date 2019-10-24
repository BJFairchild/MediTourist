import React from 'react'
import TravelLoader from './TravelLoader'

const TravelLoaderHOC = WrappedComponent => {
    return class TravelLoaderHOC extends React.Component {
        
        isLoading = () => {
            console.log(this.props.flightData.price)
            return (this.props.flightData.price === 0);
        }

        render() {
            console.log(this.props)
            return this.isLoading()?<TravelLoader />:<WrappedComponent {...this.props} />
        }
    }
}

export default TravelLoaderHOC