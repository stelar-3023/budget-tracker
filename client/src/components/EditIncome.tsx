import React, { useState } from 'react';

const EditIncome = (props: any) => {
  const [value, setValue] = useState(props.income);
  return (
    <>
      <input
        required
        type='number'
        className='form-control mr-3'
        id='income'
        value={value}
        onChange={(event: any) => setValue(event.target.value)}
      />
      <button
        type='button'
        className='btn btn-success'
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditIncome;
