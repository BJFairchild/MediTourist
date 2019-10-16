import React, { Component } from "react";

class NavBar extends Component {
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
      .then(async data => this.props.setAllTrips(data));
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
    this.props.logOut()
  }

  render() {
    return (
      <div id="navbar">
        Navbar
        <div>
          <button onClick={this.fetchUser}>My Trips</button>
        </div>
        <div>
          <h5>Procedure</h5>
          {this.populateProcedure()}
          <h5>Country</h5>
          {this.populateCountry()}
        </div>
        <div>
          <h5>US Cost (budget)</h5>
          {this.populateBudget()}
        </div>
        <div>
          <h5>Current Cost</h5>
          {this.populateCost()}
        </div>
        <div>
          <h5>Savings</h5>
          {this.populateSavings()}
        </div>
        <div>
          <button onClick={this.handleLogOut}>Logout</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
