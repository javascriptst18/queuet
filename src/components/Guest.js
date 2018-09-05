import React, { Component } from "react";
import PropTypes from "prop-types";
import queueDummy from "../queueDummy"

class Guest extends Component {
  state = {
    isLoggedIn: false,
    loginCode: "",
    queue: [...queueDummy],

  };



  handleChange = (event) => {
    event.preventDefault(event);
    this.setState({ [event.target.name]: event.target.value })
    /*     console.log(this.state.loginCode) */
  };

  handleSubmit = (event) => {
    event.preventDefault(event);
    console.log("Now the state is:" + this.state.loginCode);
    let guestInfo = this.state.queue.filter(guest =>
      guest.code === parseInt(this.state.loginCode));
    console.log(guestInfo)
  }

  guestQueue = () => {
    for (let i = 0; i < this.state.queue.length; i++) {
      if (this.state.queue[i].code === this.state.loginCode) {
        console.log(this.state.queue[i].name)
        /*         return (
                  <div>
                    {this.state.queue[1].name}
                    <button>Delete</button>
                  </div>
                ) */
      } else {
        console.log("Not there yet.")
      }
    }
  }

  render() {
    /*     this.guestQueue();
        console.log("Hej") */
    /*     console.log(this.state.queue.name)
     */
    if (this.state.isLoggedIn === false) {
      console.log("hej")
    } else if (this.state.isLoggedIn === true) {
      console.log("this is where we should see guest inofrmation")
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
      </div>

      // <div>
      //   Hello {this.state.queue[0].name},
      //   </div>
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