import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const TransactionItem = () => {
  return (
    <li className='list-group-item d-flex justify-content-between align items-center'>
      <div>
        <span className='badge badge-primary badge-pill mr-3'></span>
      </div>
      <AiFillCloseCircle size='1.5em' color='red'></AiFillCloseCircle>
    </li>
  );
};

export default TransactionItem;
