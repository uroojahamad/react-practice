import React from 'react';
import '../css/contactcard.css';

const Card = (props) => {
    return (
        <div className="contact-card">
            <img src={require(`../images/cats-images/${props.imageName}.jpg`)} alt="mr whiskerson" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={require("../images/phone-icon.png")} alt="phone-icon"/>
                <p>{props.phoneNumber}</p>
            </div>
            <div className="info-group">
                <img src={require("../images/mail-icon.png")} alt="mail-icon" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;