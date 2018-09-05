import React, { Component } from "react";
import Party from "./Party";
import queueDummy from "../queueDummy";

class Queue extends Component {
    state = {
        queue: [...queueDummy]
    }

    render() {
        const totalQueue = this.state.queue.map(party => {
            return <Party
                name={party.name}
                numberOfGuests={party.numberOfGuests}
                phone={party.phone}
                code={party.code}
                currentWaitingTime={party.currentWaitingTime}
            />
        });

        return (
            <div>
                {totalQueue}
            </div>
        );
    }
}

export default Queue;