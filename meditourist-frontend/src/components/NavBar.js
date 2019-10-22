import React, { Component } from "react";
import { Menu, Grid, Header } from "semantic-ui-react";
import { withRouter } from "react-router-dom";


class NavBar extends Component {



  fetchUser = () => {
    console.log("fetching user")
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
      .then(data => this.props.setAllTrips(data))
      .then(this.props.history.push("/user/trips"));
  };
  populateProcedure = () => {
    if (this.props.state.procedure !== "") {
      let string = this.props.state.procedure;
      let newArr = string.split("-");
      let i = 0;
      for (i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);
      }
      let newString = newArr.join(" ");
      return <h5>{newString}</h5>;
    }
  };

  populateCountry = () => {
    if (this.props.state.selected_country !== "") {
      let string = this.props.state.selected_country;
      let newArr = string.split("-");
      let i = 0;
      for (i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);
      }
      let newString = newArr.join(" ");
      return <h5>{newString}</h5>;
    }
  };

  populateBudget = () => {
    if (this.props.state.us_cost) {
      return <h5>${parseInt(this.props.state.us_cost)}</h5>;
    }
  };

  populateCost = () => {
    if (this.props.state.price) {
      return (
        <h5>${parseInt(this.props.state.price.slice(2).replace(/,/g, ""))}</h5>
      );
    }
  };

  populateSavings = () => {
    if (this.props.state.us_cost && this.props.state.price) {
      return (
        <h5>
          $
          {parseInt(this.props.state.us_cost) -
            parseInt(this.props.state.price.slice(2).replace(/,/g, ""))}
        </h5>
      );
    }
  };

  handleLogOut = () => {
    this.props.logOut();
  };

  handleTripsClick = () => {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Header position="right" size="large" as="h3">
          MediTourist
        </Header>
        <Menu secondary>
          <Menu.Item
            name="Procedure"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Country"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="US Cost"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Current Cost"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Savings"
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item name=" My Trips" onClick={this.handleTripsClick}></Menu.Item>
            <Menu.Item name="logout" onClick={this.handleLogOut} />
          </Menu.Menu>
        </Menu>
      </div>

      // <div id="navbar">
      //   Navbar
      //   <div>
      //     <button onClick={this.fetchUser}>My Trips</button>
      //   </div>
      //   <div>
      //     <h5>Procedure</h5>
      //     {this.populateProcedure()}
      //     </div><div>
      //     <h5>Country</h5>
      //     {this.populateCountry()}
      //   </div>
      //   <div>
      //     <h5>US Cost (budget)</h5>
      //     {this.populateBudget()}
      //   </div>
      //   <div>
      //     <h5>Current Cost</h5>
      //     {this.populateCost()}
      //   </div>
      //   <div>
      //     <h5>Savings</h5>
      //     {this.populateSavings()}
      //   </div>
      //   <div>
      //     <button onClick={this.handleLogOut}>Logout</button>
      //   </div>
      // </div>
    );
  }
}

export default withRouter(NavBar);
