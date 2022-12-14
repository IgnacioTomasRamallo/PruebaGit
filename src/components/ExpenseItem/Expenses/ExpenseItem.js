import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import '../Expenses/ExpenseItem.css'

const ExpenseItem = (props) => {
    //Funcion Click(){};

    const [title,setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () =>{
        setTitle('Update!');
        console.log(title); 
    };
    return (
        <Card className='expense-item'>
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
