import React from 'react';
import AffiliateCard from './AffiliateCard';
import allData from '../example-data/res.json'

const MyAffiliates = () => {
  return (
    <>
    <div className='affiliates-container'>
        {allData.map(data => {
          return (
          <AffiliateCard 
            key={data.affiliate_id}
            name={data.name}
            description={data.description}
            commission={data.commission}
            categories={data.category}
            logo={data.logo}
            data={data.affiliate_link}
          />)
        })}
    </div>
    </>
  )
}

export default MyAffiliates