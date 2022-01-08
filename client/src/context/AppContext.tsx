import React, { createContext, useReducer } from 'react';
// reducer creates new state based on action type and payload
const AppReducer = (state: any, action: any) => {
  // use switch based on action type to decide how to update state
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state, // copy current state
        transactions: [...state.transactions, action.payload]  // overwrite transactions with new transactions
      }
    default:
      return state;
  }
};


const initialState = {
  balance: 3000,
  transactions: [
    { id: 1, name: 'shopping', amount: 20 },
    { id: 2, name: 'holiday', amount: 400 },
    { id: 3, name: 'car wash', amount: 50 },
  ],
};
// added call to createContext
export const AppContext = createContext(initialState);

// create AppProvider
export const AppProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        balance: state.balance,
        transactions: state.transactions,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
