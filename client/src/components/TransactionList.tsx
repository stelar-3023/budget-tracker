import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const transactions = [
    { id: 1, name: 'shopping', amount: 20 },
    { id: 2, name: 'holiday', amount: 400 },
    { id: 3, name: 'car service', amount: 50 },
  ];

  return (
    <ul className='list-group'>
      {transactions.map((transaction) => (
        <TransactionItem
          id={transaction.id}
          name={transaction.name}
          amount={transaction.amount}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
