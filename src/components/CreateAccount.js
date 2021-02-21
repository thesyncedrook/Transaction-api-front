import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [balance, setBalance] = useState();
  const [accountNumber, setAccountNumber] = useState();

  const handleOnChange = (e) => {
    if (e.target.name === 'balance') setBalance(e.target.value);
    if (e.target.name === 'accountNumber') setAccountNumber(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    console.log('hello');
    const payload = {
      balance,
      accountNumber,
    };
    axios.post('http://localhost:8080/accounts/create', payload).then((res) => {
      
    })
    setAccountNumber('');
    setBalance('');
  };
  return (
    <div>
      <form>
        <label>Account Number</label>
        <input
          value={accountNumber}
          name="accountNumber"
          onChange={handleOnChange}
        />
        <label>Balance</label>
        <input value={balance} name="balance" onChange={handleOnChange} />
        <button onClick={handleSave}>Save</button>
      </form>
      <div>
        {}
      </div>
    </div>
    
  );
};

export default CreateAccount;
