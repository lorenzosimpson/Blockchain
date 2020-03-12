import React from 'react';

function Transactions(props) {
    const { chain, userId } = props;
    const received = []
    const sent = []

    for (const block of chain) {
        block.transactions.filter(trans => trans.recipient === userId).map(t => (
           received.push(t)
        ))
    }
    // find blocks sent
    for (const block of chain) {
        block.transactions.filter(trans => trans.sender === userId).map(t => (
            sent.push(t)
        ))
    }


    return (
        <div className='transactions'>
            <div className='received'>
                <h2>Incoming</h2>
                <div className='transaction-props'>
                    <p className='t-desc'>Sender</p>
                    <p className='t-desc'>Amount</p>
                    <p className='t-desc'>Timestamp</p>
                </div>
                
                {received.map(trans => (
                    <div className='transaction-details'>
                    <p className='t-detail'>{trans.sender}</p>
                    <p className='t-detail'>{trans.amount}</p>
                    <p className='t-detail'>{trans.date}</p>
                    </div>
                    
                ))}
            </div>

            <div className='sent'>
                <h2>Outgoing</h2>
                <div className='transaction-props'>
                    <p className='t-desc'>Recipient</p>
                    <p className='t-desc'>Amount</p>
                    <p className='t-desc'>Timestamp</p>
                </div>
                {sent.map(trans => (
                    <div className='transaction-details'>
                    <p className='t-detail'>{trans.recipient}</p>
                    <p className='t-detail'>{trans.amount}</p>
                    <p className='t-detail'>{trans.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Transactions;