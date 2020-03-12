import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Balance from './components/Balance';
import Transactions from './components/Transactions';
import Form from './components/Form';
import {Route} from 'react-router-dom';

function App() {
  const [chain, setChain] = useState([])
  const [userId, setUserId] = useState('');


  useEffect(() => {
    axios.get('http://localhost:5000/chain')
    .then(res => {
      setChain(res.data.chain)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h3 className='logo'>coinChecker</h3>
      <Route exact path='/' render={props => <Form {...props} setUserId={setUserId} />}/>
      <Route exact path='/dashboard' 
      render={() => (
          <>
          <h1>Wallet</h1>
          <section className='id-balance'>
            <p>Logged in as: {userId}</p>
            <h3>Balance: <Balance chain={chain} userId={userId} /></h3>
          </section>

          <Transactions 
            chain={chain}
            userId={userId} 
            />
        </>
      )}
      />
    </div>
  );
}

export default App;
