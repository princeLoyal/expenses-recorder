import React from 'react';
import NewExpense from './NewExpense';
import'./ExpenseForm.css';

const ExpenseForm = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenses(expenseData);
    }
    return(
        <div className='new-expense'>
            <NewExpense onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
}
export default ExpenseForm;