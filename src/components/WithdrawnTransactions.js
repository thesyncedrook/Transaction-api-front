import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Transactions from './Transactions';
import Pagination from './Pagination';

const WithdrawnTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [transactionsPerPge, setTransactionsperPage] = useState(4);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      const res = await axios.get(
        'http://localhost:8080/account/withdrawnTransactions',
        {
          params: {
            page: currentPage,
            size: transactionsPerPge,
            accountNumber: 1,
          },
        }
      );
      setTransactions(res.data);
      setLoading(false);
    };
    fetchTransactions();
  }, [currentPage]);

  const paginate = (number)=>{
    
    setCurrentPage(number)
  }
 
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My transactions</h1>
      <Transactions transactions={transactions} loading={loading} />
      <Pagination
        transactionsPerPage={transactionsPerPge}
        totalTransactions={transactions.length}
        paginate={paginate}
      />
    </div>
  );
};

export default WithdrawnTransactions;
