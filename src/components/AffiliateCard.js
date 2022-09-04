import React from 'react'

const AffiliateCard = ({name, description, commission, categories, logo}) => {
  return (
    <div className='affiliate-card'>
        <div className='affilaite-container-head'>
            <h3>{name}</h3>
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
    </div>
  )
}

export default AffiliateCard;