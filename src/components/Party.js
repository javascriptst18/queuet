import React from "react";
import PropTypes from "prop-types";


class Party extends React.Component {
    state = {
        editMode: false,
        updatedName: "",
        updatedNumberOfGuests: "",
        updatedWaitingTime: ""
    }

    changeEditMode = (event) => {
        event.preventDefault();
        if (this.state.editMode === false) {
            this.setState({
                editMode: true,
                updatedName: this.props.name,
                updatedNumberOfGuests: this.props.numberOfGuests,
                updatedWaitingTime: this.props.currentWaitingTime
            });
        } else {
            this.setState({
                editMode: false,
                updatedName: "",
                updatedNumberOfGuests: "",
                updatedWaitingTime: ""
            });
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const editFields = (
            <form>
                <input type="text" onChange={this.handleChange} name="updatedName" value={this.state.updatedName}></input>
            </form>
        );

        return (
            <div style={{
                border: "black solid 3px",
                padding: "0 1rem 1rem 1rem",
                margin: "1rem"
            }}>
                <p>Place in line:</p>
                <p>{this.props.name}</p>
                <p>Party of {this.props.numberOfGuests}</p>
                <p>Time left: {this.props.currentWaitingTime} min</p>
                <p>Tel: {this.props.phone}, code: {this.props.code}</p>
                <button onClick={this.changeEditMode}>Edit</button>
                <button>Send notification</button>
                <button onClick={() => this.props.removeFromQueue(this.props.code)}>Remove from queue</button>
                {this.state.editMode && editFields}
            </div >
        );
    }
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

