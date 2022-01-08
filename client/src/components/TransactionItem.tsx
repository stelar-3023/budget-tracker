import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

type Transaction = {
  id: number;
  name: string;
  amount: number;
}

const TransactionItem = ({id, name, amount}: Transaction)  => {
  return (
    <li className='list-group-item d-flex justify-content-between align items-center'>
      <div>
        <span className='badge-primary badge-pill mr-3'>{name}</span>
      </div>
      <AiFillCloseCircle size='1.5em' color='red'></AiFillCloseCircle>
    </li>
  );
};

export default TransactionItem;
