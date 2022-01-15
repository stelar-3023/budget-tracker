import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total: any, item: any) => {
    return (total += item.amount);
  }, 0); // 0 is the initial value
  return (
    <div className='alert alert-danger'>
      <span>Expenses: $ {totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
