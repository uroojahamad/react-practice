import React from 'react'
import '../css/Button.css'

const Button = (props) => {
    const {type, isDisabled} = props;  
    return <button className={`btn ${type ? type : ''}`} disabled={isDisabled}>Press Me</button>
}

export default Button