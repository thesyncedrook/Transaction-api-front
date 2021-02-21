 import React from 'react';
import uuid from 'react-uuid';
const Transactions = ({ transactions, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(transactions);
  return (
    <ul className="list-group mb-4">
      {transactions.map((transaction) => {
        return (
          <li key={uuid()} className="list-group-item">
            {transaction.transactionType+"          "+transaction.accountNumber+ "         " +transaction.amount+"          "+transaction.transactionTs}
          </li>
        );
      })}
    </ul>
  );
};

export default Transactions;
