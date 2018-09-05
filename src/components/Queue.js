import React from "react";
import Party from "./Party";
import queueDummy from "../queueDummy";

class Queue extends React.Component {
    state = {
        queue: [...queueDummy]
    }

    removeFromQueue = (code) => {
        const listAfterRemovedParty = this.state.queue.filter(party => {
            if (party.code !== code) {
                return party;
            }
        })
        this.setState({ queue: listAfterRemovedParty })
    }

    render() {
        const totalQueue = this.state.queue.map(party => {
            return <Party
                key={party.code}
                name={party.name}
                numberOfGuests={party.numberOfGuests}
                phone={party.phone}
                code={party.code}
                currentWaitingTime={party.currentWaitingTime}
                removeFromQueue={this.removeFromQueue}
            />
        });

        return (
            <div>
                {totalQueue}
            </div >
        );
    }
}

export default Queue;

// Funktioner:
// - Skicka notifikation (1 - Din väntetid har ändrats, 2 - Ditt bord är snart klart 3 - Ditt bord är klart)