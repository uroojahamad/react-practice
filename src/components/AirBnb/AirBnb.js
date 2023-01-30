import React from 'react';
import '../../css/airbnb.css'
import Header from './Header'
import ImageGridText from './ImageGridText';
import AirbnbCard from './AirbnbCard';
import cardData from './AirbnbCardDetails';

const AirBnb = () => {
    return (
        <>
            <Header />
            <ImageGridText />
            <div className='airbnb-card-container'>
                {
                    cardData.map((data) => {
                        return <AirbnbCard
                            key={data.id}
                            img={data.coverImg}
                            rating={data.stats.rating}
                            reviewCount={data.stats.reviewCount}
                            location={data.location}
                            title={data.title}
                            price={data.price}
                            openSpots={data.openSpots}
                        />
                    })
                }

                {/* <AirbnbCard
                    img = "katie-zaferes"
                    rating = "4.5"
                    reviewCount = {6}
                    country = "India"
                    title = "Life Lessons with Urooj Ahamad"
                    price = {200}
                />
                <AirbnbCard
                    img = "katie-zaferes"
                    rating = "3.5"
                    reviewCount = {6}
                    country = "Australia"
                    title = "Life Lessons with Minhaj Ahmad Khan"
                    price = {300}
                /> */}
            </div>
        </>
    )
}

export default AirBnb;