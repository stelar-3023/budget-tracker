import React, { useContext } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';

type Expense = {
  id: number;
  name: string;
  amount: number;
};

const ExpenseItem = ({ id, name, amount }: Expense) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  return (
    <li className='list-group-item d-flex justify-content-between align items-center'>
      {name}
      <div>
        <span className='mr-3'>$ {amount} </span>
        <AiFillCloseSquare
          size='1.5em'
          color='red'
          onClick={handleDelete}
        ></AiFillCloseSquare>
      </div>
    </li>
  );
};

export default ExpenseItem;
