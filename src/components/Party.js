import React, { Component } from "react";
import PropTypes from 'prop-types';

class Party extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Hello Party!</h1>
            </div>
        );
    }
}

Party.propTypes = {
    name: PropTypes.string,
    numberOfGuests: PropTypes.number,
    phone: PropTypes.string,
    code: PropTypes.number,
    currentWaitingTime: PropTypes.number
}

export default Party;

// Funktioner:
// - Skicka notifikation (1 - Din väntetid har ändrats, 2 - Ditt bord är snart klart 3 - Ditt bord är klart)