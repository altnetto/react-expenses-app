import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    // these way will force the react updating at the state
    // otherwise, this would not be able to reload in time,
    // what would occasionate a data lose
    const titleChangeHandler = (event) => {

        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle:event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {

        setEnteredDate(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date( enteredDate)
        };

        /*  On that point, we are calling the Parent property onSaveExpenseData,
            that are going to call the saveExpenseHandler method as well */
        props.onSaveExpenseData(expenseData);

        setEnteredDate('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input  type="text" 
                            value={enteredTitle}
                            onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input  type="number"
                            value={enteredAmount}
                            onChange={amountChangeHandler} 
                            min="0.01" 
                            step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input  type="date" 
                            value={enteredDate}
                            onChange={dateChangeHandler}
                            min="2019-01-01" 
                            max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

// This syntax works as well