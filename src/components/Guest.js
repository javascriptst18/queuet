import React, { Component } from "react";
import PropTypes from "prop-types";
import queueDummy from "../queueDummy"

class Guest extends Component {
  //In our state we track whether or not the guest is logged in/logged out
  //We  track the input-field (loginCode) and we import the dummy-data from queueDummy
  state = {
    isLoggedIn: false,
    loginCode: "",
    queue: [...queueDummy],
    currentGuest: []
  };

  //The handleChange function handles the change in 
  //the input-field but can be used for other changes as well  
  //When typing the state loginCode is updated
  handleChange = (event) => {
    event.preventDefault(event);
    this.setState({ [event.target.name]: event.target.value })
  };

  //The handleSubmit function handles both the button and enter-key 
  //after typing the loginCode
  //In the array guestInfo we store the results from a filter-method:
  //We filter the dummy-data and see if one of the stores codes in 
  //the dummy data matches the loginCode (Which the user entered in the input-field)
  //If the codes match, there should only be 1 match which means the array length will be 1
  //In that case the state isLoggedIn is set to true. No matches or multiple will lead 
  //to isLoggedIn false!
  //We also store the name of the guest in the state currentGuest, 
  //which then is displayed after loggin in
  handleSubmit = (event) => {
    event.preventDefault(event);
    const guestInfo = this.state.queue.filter(guest =>
      guest.code === parseInt(this.state.loginCode, 10));
    this.setState({ currentGuest: guestInfo });

    if (guestInfo.length === 1) {
      this.setState({ isLoggedIn: true })
    } else {
      this.setState({ isLoggedIn: false })
    }
  };

  //handleReturnClick sets the isLoggedIn state to false,
  //Which returns back to the login-input-field
  handleReturnClick = (event) => {
    event.preventDefault(event);
    this.setState({ isLoggedIn: false })
  }

  //? Here we can handle the get out of line button
  handleRemoveClick = (event) => {
    event.preventDefault(event);
  }
  render() {
    //Console log tells us whether or not the guest is logged in 
    //so whether or not the array's length in the handleSubmit function 
    //is 1
    if (this.state.isLoggedIn === false) {
      console.log("not logged in");
      return (
        <div>
          <h1>Let's get in line!</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="loginCode">Please enter your code:</label>
              {
                //Extra function (not yet coded):
                //Possibility to open an info-message telling the guest 
                //where he/she receives the code.
              }
              <input name="loginCode" placeholder="four-digit code" onChange={this.handleChange} value={this.state.loginCode}></input>
              <button type="submit">Get in Line</button>
            </form>
          </div>
        </div>
      );
    } else if (this.state.isLoggedIn === true) {
      console.log("logged in")
    }

    const guestCard = this.state.currentGuest.map(guest => {
      return (
        <div key={this.state.loginCode}>
          <p>Code: {guest.code}</p>
          <p>Name: {guest.name}</p>
          <p>Number of Guests: {guest.numberOfGuests}</p>
          <p>Phone number: {guest.phone}</p>
          <p>Current Wait: {guest.currentWaitingTime} min</p>
        </div>
      )
    })

    //! Since the isLoggedIn state only changes when the submit-function runs
    //! The user is loggedIn even when entering a new code or deleting, until pressing submit
    //! We don't think this is too much of a problem but something we could fix later on 

    //? Get out of line button has no functioanlity yet. 
    //?We thought about simply hiding the card, even though th guest thinks they deleted it
    return (
      <div>
        <h1>Hello {this.state.currentGuest[0].name}!</h1>
        {guestCard}
        <button>Get out of line!</button>
        <button onClick={this.handleReturnClick}>Return</button>
      </div >
    )
  }
};

//? Do we need proptypes? How do we use them? Should this component use them? 
/* Guest.propTypes = {
  name: PropTypes.string,
  numberOfGuests: PropTypes.number,
  phone: PropTypes.string,
  loginCode: PropTypes.number,
  currentWaitingTime: PropTypes.number
} */
export default Guest;