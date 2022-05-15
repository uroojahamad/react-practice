import React, { useState } from "react";
import '../css/counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [activeNumber, setActiveNumber] = useState(5);

    const increment = () => {
        setCount(count + (parseInt(activeNumber)));
    };

    const decrement = () => {
        setCount(() => {
            if ((count - (parseInt(activeNumber))) < 0)
                return 0;
            else
                return count - (parseInt(activeNumber));
        });
    };

    const changeActiveState = (e) => {
        setActiveNumber(e.target.innerText);
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
                <button className={`count-btn ${5 == activeNumber ? 'active' : ''}`} onClick={(e) => changeActiveState(e)}>5</button>
                <button className={`count-btn ${10 == activeNumber ? 'active' : ''}`} onClick={(e) => changeActiveState(e)}>10</button>
                <button className={`count-btn ${15 == activeNumber ? 'active' : ''}`} onClick={(e) => changeActiveState(e)}>15</button>
                <button className={`count-btn ${20 == activeNumber ? 'active' : ''}`} onClick={(e) => changeActiveState(e)}>20</button>
            </div>
        </div>
    );
}

export default Counter;