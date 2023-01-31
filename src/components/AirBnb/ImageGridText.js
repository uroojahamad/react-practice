import React from 'react';

const ImageGridText = () => {
    return (
        <section className='airbnb-imagegrid'>
            <div className='gridimage'>
                <img src={require("../../images/photo-grid.png")} alt="photogrid"/>
            </div>
            <div className='airbnb-seciontext'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}

export default ImageGridText;