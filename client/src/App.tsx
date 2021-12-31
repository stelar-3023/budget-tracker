import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Income from './components/Income';
import Balance from './components/Balance';
import ExpenseTotal from './components/ExpenseTotal';
import TransactionList from './components/TransactionList';

const App = () => {
  return (
    <div className='container'>
      <h1 className='mt-3'>Expense Tracker</h1>
      <Balance />
      <div className='row mt-3'>
        <div className='col-sm'>
          <Income />
        </div>
        <div className='col-sm'>
          <ExpenseTotal />
        </div>
      </div>
      <h3 className='mt-3'>Transactions</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default App;
