import React from 'react';
import { useAuth } from '../context/AuthContext';

const AffiliateCard = ({
    name, 
    description, 
    commission, 
    categories, 
    logo, 
    affiliateId, 
    msg, 
    affiliateList}) => {

    const { currentUser } = useAuth();

    const handleAffliateList = (affilaiteId, url) => {  
      const payload = {
          affiliates: affilaiteId
      }
      
      fetch(`${process.env.REACT_APP_AG_API}${url}${currentUser.uid}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(payload),
      })
      .then(response => {
        console.log(response);
        if(response && url === '/v1/users/remove/'){
          window.location.reload();
        }
        return response
      })
      .catch(err => console.err(err));
    }

  return (
    <>
      {msg ? <p>{msg}</p> :<div className='affiliate-card'>
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
          {!affiliateList ? <button 
              className='join-affiliate-button orange' 
              onClick={() => handleAffliateList(affiliateId, '/v1/users/')}>
              Add to Affiliate List
          </button> : <button 
              className='join-affiliate-button orange' 
              onClick={() => handleAffliateList(affiliateId, '/v1/users/remove/')}>
              Remove from Affiliate List
          </button>}
      </div>}
    </>
  )
}

export default AffiliateCard;