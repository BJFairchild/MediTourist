import React from 'react'
import ModalLoader from './ModalLoader'

const ModalLoaderHOC = WrappedComponent => {
    return class ModalLoaderHOC extends React.Component {
        
        isLoading = () => {
            console.log("modal loading =",this.props.state.modal_is_loading)
            return this.props.state.modal_is_loading
        }

        render() {
            return this.isLoading()?<ModalLoader />:<WrappedComponent {...this.props} />

            // return <WrappedComponent {...this.props} />
        }
    }
}

export default ModalLoaderHOC