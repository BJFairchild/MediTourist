import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import ModalLoaderHOC from '../HOC/ModalLoaderHOC'

class ContentForModal extends Component {
    render(){
        return(
        <>
            <Modal.Header>
              Procedure: {this.props.formatProcedureName()}
              <br></br>Price: {this.props.state.price}{" "}
            </Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="medium"
                src={this.props.flagURL["flag"]}
              />
              <Modal.Description>
                <Header>{this.props.state.selected_clinic["name"]}</Header>
                <p>{this.props.state.selected_clinic["address"]}</p>
                <br></br>
                {this.props.formatOverview()}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary onClick={this.props.handleCreateTrip}>
                Set Destination <Icon name="right chevron" />
              </Button>
            </Modal.Actions>
            </>
          )
    }
}

export default ModalLoaderHOC(ContentForModal);