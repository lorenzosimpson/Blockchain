import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Transactions from './components/Transactions';

function App() {
  const [chain, setChain] = useState([])
  const [userId, setUserId] = useState('alec');


  useEffect(() => {
    axios.get('http://localhost:5000/chain')
    .then(res => {
      console.log(res.data)
      setChain(res.data.chain)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1>Welcome, {userId}</h1>
      <p>Balance: </p>
      <Transactions 
      chain={chain}
      userId={userId} />
    </div>
  );
}

export default App;
