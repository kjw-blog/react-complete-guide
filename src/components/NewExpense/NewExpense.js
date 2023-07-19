import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [onAdd, setOnAdd] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const openFormHandler = () => {
    setOnAdd(true);
  };

  const closeFormHandler = () => {
    setOnAdd(false);
  };

  return (
    <div className='new-expense'>
      {onAdd ? (
        <ExpenseForm
          onCloseForm={closeFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={openFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
