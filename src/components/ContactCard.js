import React from 'react';
import Card from './Cards';

const ContactCard = () => {
    return (
        <div className='contact-card-container'>
            <Card
                imageName="mr-whiskerson"
                name="Mr. Whiskerson"
                phoneNumber= "(212) 555-1234"
                email= "mr.whiskaz@catnap.meow" 
            />
            <Card 
                imageName="fluffykins"
                name="Fluffykins"
                phoneNumber= "(212) 555-2345"
                email= "fluff@me.com"
            />
            <Card 
                imageName="felix"
                name="Felix"
                phoneNumber= "(212) 555-4567"
                email= "thecat@hotmail.com"
            />
            <Card 
                imageName="pumpkin"
                name="Pumpkin"
                phoneNumber= "(0800) CAT KING"
                email= "pumpkin@scrimba.com"
            />
            <Card 
                imageName="pumpkin"
                name="Pumpkin"
                phoneNumber= "(0800) CAT KING"
                email= "pumpkin@scrimba.com"
            />
            <Card 
                imageName="pumpkin"
                name="Pumpkin"
                phoneNumber= "(0800) CAT KING"
                email= "pumpkin@scrimba.com"
            />
            <Card 
                imageName="pumpkin"
                name="Pumpkin"
                phoneNumber= "(0800) CAT KING"
                email= "pumpkin@scrimba.com"
            />
        </div>
    )
}

export default ContactCard;