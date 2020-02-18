import uuid from 'uuid';
import dataBase from '../firebase/firebase';
import firebase, { database } from 'firebase';

// Before Firebase:
// component calls action generator
// action generator return object
// component dispatches object
// redux store changes

// Integrating Firebase:
// component calls action generator
// action generatr returns function --> here redux-thunk needs to be used as middleware for dispatching functions
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

// START ADD_EXPENSE
export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return dataBase
      .ref('expenses')
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          }),
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => {
  return dispatch => {
    const db = firebase.database().ref('expenses');

    return db.once('value').then(snapshot => {
      const expenses = [];

      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};
