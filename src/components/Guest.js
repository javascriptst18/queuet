import React, { Component } from "react";
import PropTypes from "prop-types";
import queueDummy from "../queueDummy"

class Guest extends Component {
  state = {
    loginCode: "",
    queue: [...queueDummy]
  };



  handleChange = (event) => {
    event.preventDefault(event);
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state.loginCode)
  };

  handleSubmit = (event) => {
    event.preventDefault(event);
    console.log("Now the state is:" + this.state.loginCode)
  }

  render() {
    let guestQueue = () => {
      if (this.state.queue.code == this.state.loginCode) {
        return (
          <div>
            {this.state.queue[1].name}
            <button>Delete</button>
          </div>
        )
      }
    }

    return (
      <div>
        <h1>Hello Guest!</h1>
        {
          //Login with 4-number code:
        }
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
        <div>

        </div>
      </div>
    );
  }
}

Guest.propTypes = {
  name: PropTypes.string,
  numberOfGuests: PropTypes.number,
  phone: PropTypes.string,
  loginCode: PropTypes.number,
  currentWaitingTime: PropTypes.number
}

export default Guest;