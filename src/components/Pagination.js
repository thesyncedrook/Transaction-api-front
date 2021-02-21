import React from 'react';

export default function Pagination({
  transactionsPerPage,
  totalTransactions,
  paginate,
}) {
  const pageNumbers = [];
  for (let index = 0; index < 10; index++) {
    pageNumbers.push(index);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                href="#"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
