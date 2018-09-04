import React, { Component } from "react";
import queueDummy from "../queueDummy";

class Queue extends Component {
    state = {
        queue: [...queueDummy]
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>{this.state.queue[1].name}</h2>
            </div>
        );
    }
}

export default Queue;