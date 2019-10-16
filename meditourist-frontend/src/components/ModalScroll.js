import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";

class ModalScroll extends Component {
  state = { baseUrl: "https://www.medigo.com/" };

  generateModal = () => {
    console.log("clicking gen modal");
    let search_term = this.state.baseUrl + this.props.item[1];
    let clinic_name = this.props.item[0];
    let price = this.props.item[3];
    this.props.handleModalScrapeAndGeneration(search_term, clinic_name, price);
  };

  formatOverview = () => {
    if (this.props.state.selected_clinic["overview"])
      return this.props.state.selected_clinic["overview"].map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
            <br></br>
          </div>
        );
      });
  };

  formatProcedureName = () => {
    let string = this.props.state.procedure;
    let newString = "";
    let newArr = string.split("-");
    let i = 0;
    for (i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);
    }
    newString = newArr.join(" ");
    return newString;
  };

  handleCreateTrip = () => {
    let procedureString = this.props.state.procedure;
    let newProcedureArr = procedureString.split("-");
    let i = 0;
    for (i = 0; i < newProcedureArr.length; i++) {
      newProcedureArr[i] =
        newProcedureArr[i].charAt(0).toUpperCase() +
        newProcedureArr[i].substr(1);
    }
    let newProcedureString = newProcedureArr.join(" ");

    let countryString = this.props.state.selected_country;
    let newCountryArr = countryString.split("-");
    for (i = 0; i < newCountryArr.length; i++) {
      newCountryArr[i] =
        newCountryArr[i].charAt(0).toUpperCase() + newCountryArr[i].substr(1);
    }
    let newCountryString = newCountryArr.join(" ");

    fetch(this.props.BackendURL + "/trips", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        procedure: newProcedureString,
        price: parseInt(this.props.state.price.slice(2).replace(/,/g, "")),
        country: newCountryString,
        clinic_name: this.props.item[0],
        clinic_overview: this.props.state.selected_clinic["overview"].join(" "),
        address: this.props.state.selected_clinic["address"],
        user_id: this.props.state.currentUser["user"]["id"],
        savings: ((parseInt(this.props.state.us_cost))-(parseInt(this.props.state.price.slice(2).replace(/,/g, ""))))
      })
    });
  };

  render() {
    return (
      <div>
        {console.log("state in modal", this.props.state)}
        <Modal
          trigger={<Button onClick={this.generateModal}>Modal Info</Button>}
        >
          <Modal.Header>
            Procedure: {this.formatProcedureName()}
            <br></br>Price: {this.props.state.price}{" "}
          </Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />
            <Modal.Description>
              <Header>{this.props.state.selected_clinic["name"]}</Header>
              <p>{this.props.state.selected_clinic["address"]}</p>
              <br></br>
              {this.formatOverview()}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.handleCreateTrip}>
              Set Destination <Icon name="right chevron" />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default ModalScroll;
