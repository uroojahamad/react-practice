import React, {useState, useEffect} from 'react';
import Card from './Cards';
import axios from 'axios';

const ContactCard = () => {

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      console.log("mount");
      setLoading(true);
      axios.get('https://api.unsplash.com/search/photos?page=1&query=husky&client_id=JHqEB7c-97RWsnUQWyOQIpF04Cr0KVJmHP5oN4n5xRs')
      .then(response => setCardData(response?.data?.results))
      .catch(error => console.error())
      .finally(() => setLoading(false))
    }, [])
    
    console.log(cardData);

    return (
        <div className='contact-card-container'>
            {
                cardData.map((data) => {
                    return <Card
                            key={data.id}
                            imageUrl={data.urls.thumb}
                            name={`Mr. ${data.user.first_name} ${data.user.last_name}`}
                            phoneNumber= "(212) 555-1234"
                            email= "mr.whiskaz@catnap.meow" 
                        />
                })
            }
        </div>
    )
}

export default ContactCard;