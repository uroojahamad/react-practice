import React, {useState} from "react";
import '../css/dice.css';

const DiceRoll = () =>{
    const [imageName, setImageName] = useState(`1.png`);
    const rollDice = () =>{
        setImageName("dice.gif");
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            setImageName(`${randomNumber}.png`); 
        }, 300)
              
    }

    return (
        <div className="container">
            <img src={require(`../images/${imageName}`)} alt="dice"/>
            <button className="btn" onClick={rollDice}>Roll Dice</button>
        </div>
    );

}

export default DiceRoll;