import React, { useState } from 'react';

function Balance(props) {
    const {userId} = props
    const {chain} = props;


    const received = [0]
    const sent = [0]

    // find blocks recieved
    for (const block of chain) {
        block.transactions.filter(trans => trans.recipient == userId).map(t => (
            received.push(t.amount)
        ))
    }
    // find blocks sent
    for (const block of chain) {
        block.transactions.filter(trans => trans.sender == userId).map(t => (
            sent.push(t.amount)
        ))
    }

    const total = (received.reduce((acc, val) => acc + val)) - (sent.reduce((acc, val) => acc + val))


    return (
        <>
            {total}
        </>
    );
}

export default Balance;