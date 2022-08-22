import React from 'react';
import AffiliateCard from './AffiliateCard';

const DashBoard = () => {
  return (
    <>
      <div className='dashboard-container'>
        <div className='instructions-container'>
          <button className='close-button-welcome-announcement'>&#10005;</button>
          <h1 className='welcome-header'>Welcome to Affiliate Galore</h1>
          <p className='instructions-text'>There are 9252 affiliates ready for you to sign up to.</p>
          {/* <button className='start-search-button'>Start your search</button> */}
        </div>
      </div>
      <div className='filter-cotainer'>
        <button className='blue-button'>For You</button>
        <button className='blue-button'>For Begginers</button>
        <button className='blue-button'>Categories</button>
        <button className='blue-button'>Best Paying</button>
      </div>
      <div className='affiliates-container dashboard'>
        <AffiliateCard/>
        <AffiliateCard/>
        <AffiliateCard/>
      </div>
    </>
  )
}

export default DashBoard