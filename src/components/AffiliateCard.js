import React from 'react';
import { useAuth } from '../context/AuthContext';

const AffiliateCard = ({name, description, commission, categories, logo, key}) => {

    const { currentUser } = useAuth();

    const handleAffliateList = (affilaiteId) => {
        const userId = window.getItem("userId");
        const payload = {
            userId: currentUser.uid,
            affiliates: [affilaiteId]
        }
        const requestOptions = { //
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }
          fetch(`api/v1/users/${userId }`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        console.log('This is a put request!', payload);
    }

  return (
    <div className='affiliate-card'>
        <div className='affilaite-container-head'>
            <h5><strong>{name}</strong></h5>
            <img 
                alt={`${name} logo`}
                src={logo}
                className='affiliate-logo' 
            />
        </div>
        <p>{description}</p>
        <p>Commision: {commission}</p>
        <div className='category-list'><p>Category: </p> 
            <ul className='categories'>
                {categories.map(category => <li key={category}>{category} |</li>)}
            </ul>
        </div>
        <button className='join-affiliate-button'>Join this Affiliate Program</button>
        <button 
            className='join-affiliate-button orange' 
            onClick={() => console.log('Affiliate ID: ', key)}>
            Add to Affiliate List
        </button>
    </div>
  )
}

export default AffiliateCard;