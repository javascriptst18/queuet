import React, { Component } from "react";
import PropTypes from "prop-types";

function Party(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.numberOfGuests}</p>
            <p>{props.phone}</p>
            <p>{props.code}</p>
            <p>{props.currentWaitingTime}</p>
        </div>
    );
}

Party.propTypes = {
    name: PropTypes.string.isRequired,
    numberOfGuests: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
    currentWaitingTime: PropTypes.number.isRequired
}

export default Party;

// Funktioner:
// - Skicka notifikation (1 - Din väntetid har ändrats, 2 - Ditt bord är snart klart 3 - Ditt bord är klart)