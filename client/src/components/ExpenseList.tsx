import React, { useContext, useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [searchExpenses, setSearchExpenses] = useState(expenses || []);

  useEffect(() => {
    setSearchExpenses(expenses);
  }, [expenses]);

  const handleSearch = (event: any) => {
    const searchResults = expenses.filter((searchExpense) =>
      searchExpense.name.toLowerCase().includes(event.target.value)
    );
    setSearchExpenses(searchResults);
  };
  // const transactions = [
  //   { id: 1, name: 'shopping', amount: 20 },
  //   { id: 2, name: 'holiday', amount: 400 },
  //   { id: 3, name: 'car service', amount: 50 },
  // ];

  return (
    <React.Fragment>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Search transactions...'
        onChange={handleSearch}
      />
      <br />
      <ul className='list-group'>
        {searchExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            amount={expense.amount}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ExpenseList;
