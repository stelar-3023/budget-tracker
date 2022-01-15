import React, { createContext, useReducer } from 'react';
// reducer creates new state based on action type and payload
const AppReducer = (state: any, action: any) => {
  // use switch based on action type to decide how to update state
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state, // copy current state
        expenses: [...state.expenses, action.payload], // overwrite expenses with new expenses
      };
    case 'DELETE_EXPENSE':
      return {
        ...state, // copy current state
        expenses: state.expenses.filter(
          (expense: any) => expense.id !== action.payload
        ), // filter out expense with id that matches action.payload
      };
    default:
      return state;
  }
};


const initialState = {
  budget: 3000,
  expenses: [
    { id: 1, name: 'shopping', amount: 20 },
    { id: 2, name: 'holiday', amount: 400 },
    { id: 3, name: 'car wash', amount: 50 },
  ], dispatch : (action: any) => {}
};
// added call to createContext
export const AppContext = createContext(initialState);

// create AppProvider
export const AppProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const actions = {
    budget: state.budget,
    expenses: state.expenses,
    dispatch,
  }

  return (
    <AppContext.Provider
      value={actions}
    >
      {props.children}
    </AppContext.Provider>
  );
};
