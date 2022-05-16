import React, { useState } from "react";
import '../css/counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [activeNumber, setActiveNumber] = useState(5);
    const btnArray = [5, 10, 15, 20];

    const increment = () => {
        setCount((previousState) =>{
            return previousState + activeNumber;
        });
    };

    const decrement = () => {
        setCount((previousState) => {
            if ((previousState - activeNumber) < 0)
                return 0;
            else
                return previousState - activeNumber;
        });
    };

    const changeActiveState = (e) => {
        const value = parseInt(e.target.innerText);
        setActiveNumber(value);
    }

    return (
        <div className="main">
            <h1>Counter</h1>
            <div className="count-container">
                <button className="count" onClick={increment}>+</button>
                <span id="enterNumber">{count}</span>
                <button className="count" onClick={decrement}>-</button>
            </div>
            <div className="flex-container">
                {
                    btnArray.map((number) =>{
                        return <button className={`count-btn ${number === activeNumber ? 'active' : ''}`} onClick={changeActiveState}>{number}</button>
                    })
                }
            </div>
        </div>
    );
}

export default Counter;