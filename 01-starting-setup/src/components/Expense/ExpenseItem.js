import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    //Atualizar o valor do elemento na tela depois da renderização inicial
    const [title, setTitle] = useState(props.title)

    //Ouvindo o evento click
    const clickHandler = () => {
        //Atualizando
        setTitle(title + ' Updated!')
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>EVENTO</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;