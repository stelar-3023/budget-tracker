import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total: any, item: any) => {
    return (total += item.amount);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
    <div className={` alert ${alertType}`} >
      <span>Remaining: $ {budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
