import React, { useContext } from 'react';
import TransactionItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  // const transactions = [
  //   { id: 1, name: 'shopping', amount: 20 },
  //   { id: 2, name: 'holiday', amount: 400 },
  //   { id: 3, name: 'car service', amount: 50 },
  // ];

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <TransactionItem
          id={expense.id}
          name={expense.name}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
