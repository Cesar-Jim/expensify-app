import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Exporting the unconnected version of the component
export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

// Exporting the connected version of the component
export default connect(mapStateToProps)(ExpenseList);
