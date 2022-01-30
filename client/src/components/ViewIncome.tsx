import React from 'react';

const ViewIncome = (props: any) => {
  return (
    <>
      <span>Income: ${props.income}</span>
      <button
        type='button'
        className='btn btn-success'
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewIncome;
