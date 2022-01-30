import React, { useState } from 'react';

const EditBudget = (props: any) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required
        type='number'
        className='form-control mr-3'
        id='budget'
        value={value}
        onChange={(event: any) => setValue(event.target.value)}
      />
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
