import React, {useState}from "react"
import './ExpenseForm.css';


const ExpenseForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState('Title');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    const titleChageHander = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })
        // setUserInput((prevState)=> {
        //     return {...prevState, esteredTitle: event.target.value};
        // });
    };

    const amountChangeHander = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
    };
    const dateChangeHander = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = ();
    }
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type='text' onChange={titleChageHander} />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHander} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHander}/>
            </div>
        </div>
        <div className="new-expenses__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;