import React from 'react';
import AffiliateCard from './AffiliateCard';

const MyAffiliates = () => {
  return (
    <div>
      <div className='affiliates-container'>
        <AffiliateCard/>
        <AffiliateCard/>
        <AffiliateCard/>
      </div>
    </div>
  )
}

export default MyAffiliates