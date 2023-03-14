import React, { useState, useEffect } from 'react';

import './Expenses.css';
import ExpenseItems from './ExpenseItem';
import ExpenseForm from '../Expenses/ExpenseForm';


const expenses = [
    {
      title: 'New Tv (This is a dummy Expense!)',
      amount: 345.65,
      date: new Date('2020, 01, 31'),
      id: 1,
    },
    {
      title: 'New Radio Set (This is a dummy Expense!)',
      amount: 123.65,
      date: new Date('2020, 03, 8'),
      id: 2,
    },
    {
      title: 'Some Cusions (This is a dummy Expense!)',
      amount: 500.45,
      date: new Date(),
      id: 3,
    },
];

let firstMount = true;

function Expenses(){
    const [ expensesList, setExpensesList ] = useState(expenses);

    useEffect(() => {
      const getExpenses = async () => {
        let email = localStorage.getItem('Email');
        const index = email.indexOf('@');
        email = email.substring(0, index);
        const response = await fetch(`https://expenses-recorder-f372f-default-rtdb.firebaseio.com/usersExpenses/${email}/expenses.json`);
        const userExpenses = await response.json();
        if(userExpenses){
         setExpensesList(userExpenses);
        }
      }
      getExpenses();
    }, []);
    useEffect(() => {
      const sendUpdatedListToDatabase = async () => {
        let email = localStorage.getItem('Email');
        const index = email.indexOf('@');
        email = email.substring(0, index);
        const response = await fetch(`https://expenses-recorder-f372f-default-rtdb.firebaseio.com/usersExpenses/${email}/expenses.json`, {
          method: 'PUT',
          body: JSON.stringify(expensesList),
        });
        const data = await response.json();
      }

      if(!firstMount){
         sendUpdatedListToDatabase();
      }

    }, [expensesList]);

    const onAddExpenses = (expenseData) => {
        setExpensesList(prevExpensesList => {
           if(!firstMount){
            const updatedExpensesList = [expenseData, ...prevExpensesList];
            return updatedExpensesList;
           } else {
              const updatedExpensesList = [];
              updatedExpensesList.push(expenseData);
              firstMount = false;
              return updatedExpensesList;
           }
        });
      }

    return(
        <div>
            <ExpenseForm onAddExpenses={onAddExpenses}/>
            <div className='expenses'>
                {
                    expensesList.map( expense => (
                        <ExpenseItems key={expense.id} expenseDate={new Date(expense.date)} expenseTitle={expense.title} expenseAmount={expense.amount}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Expenses;
