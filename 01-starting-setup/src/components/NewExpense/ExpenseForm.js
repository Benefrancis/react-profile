import React, { useState } from "react";
import './ExpenseForm.css';



const ExpenseForm = () => {

    const [enteredTitle, setEneteredTitle] = useState();
    const [enteredAmount, setEneteredAmount] = useState();
    const [enteredDate, setEneteredDate] = useState();

    const titleChangeHandler = (event) => {
        setEneteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setEneteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setEneteredDate(event.target.value)
    };

    return (
        <form>
            <div className="new-expense__controls">
                {/* Title */}
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                {/* Amount */}
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                {/* Date */}
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' min='1999-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">

                    <button type="submit">Add Expense</button>

                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;