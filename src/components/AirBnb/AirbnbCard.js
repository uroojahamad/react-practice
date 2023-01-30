import React from 'react';

const AirbnbCard = (props) => {
    const {img, rating, reviewCount, location, title, price, openSpots} = props;
    let badgeText;
    if(openSpots === 0)
    {
        badgeText = "SOLD OUT";
    }
    else if(location === "Online"){
        badgeText = "ONLINE";
    }

    return (
        <div className="airbnb-card">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={require(`../../images/${img}`)} alt={img} className="card--image" />
            <div className="card--stats padding">
                <img src={require("../../images/star.png")} alt="star" className="card--star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="text">{title}</p>
            <p className="text"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}

export default AirbnbCard;