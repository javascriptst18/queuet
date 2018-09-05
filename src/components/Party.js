import React from "react";
import PropTypes from "prop-types";

function Party(props) {
    return (
        <div style={{
            border: "black solid 3px",
            padding: "0 1rem 1rem 1rem",
            margin: "1rem"
        }}>
            <p>Place in line:</p>
            <p>{props.name}</p>
            <p>Party of {props.numberOfGuests}</p>
            <p>Time left: {props.currentWaitingTime} min</p>
            <p>Tel: {props.phone}, code: {props.code}</p>
            <button>Edit</button>
            <button>Send notification</button>
            <button onClick={() => props.removeFromQueue(props.code)}>Remove from queue</button>
        </div >
    );
}

Party.propTypes = {
    name: PropTypes.string.isRequired,
    numberOfGuests: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
    currentWaitingTime: PropTypes.number.isRequired,
    removeFromQueue: PropTypes.func.isRequired
}

export default Party;

