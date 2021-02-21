import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">All Accounts  </Link>
      <Link to="/create/account">Create Account  </Link>
      <Link to="/account/withdraw">Withdraw  </Link>
      <Link to="/create/deposit">Deposit  </Link>
      <Link to="/account/withdrawnTransaction">See Withdrawn Transactions  </Link>
      <Link to="/create/filterTransaction">Filtered Transactions  </Link>
    </div>
  );
};

export default Header;
