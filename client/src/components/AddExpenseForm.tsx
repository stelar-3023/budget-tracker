import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = (event: any) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      amount: parseInt(amount),
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })
    // alert('name: ' + name + ' amount: ' + amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-sm'>
          <label htmlFor='name'>Name</label>
          <input
            required
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className='col-sm'>
          <label htmlFor='amount'>Amount</label>
          <input
            required
            type='text'
            className='form-control'
            id='amount'
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          ></input>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary mt-3'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
