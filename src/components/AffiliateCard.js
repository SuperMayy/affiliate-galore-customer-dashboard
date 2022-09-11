import React from 'react';
import { useAuth } from '../context/AuthContext';

const AffiliateCard = ({name, description, commission, categories, logo, affiliateId}) => {

    const { currentUser } = useAuth();

    const handleAffliateList = (affilaiteId) => {
        const payload = {
            affiliates: affilaiteId
        }
          fetch(`/v1/users/${currentUser.uid}`, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(payload),
          })
            .then(response => response)
            .catch(err => console.err(err));
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
            onClick={() => handleAffliateList(affiliateId)}>
            Add to Affiliate List
        </button>
    </div>
  )
}

export default AffiliateCard;