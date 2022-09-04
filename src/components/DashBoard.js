import React, {useState, useEffect} from 'react';
import AffiliateCard from './AffiliateCard';
import loadingGif from '../assets/gifs/loading.gif'
import axios from 'axios';


const DashBoard = () => {
  const [errMsg, setErrMsg] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [affiliates, setAffiliates] = useState();
  const [category, setCategory] = useState('Beginner');

  const handleCategory = () => {
    setCategory()
  }

  const BASE_URL = 'api/v1/affiliates/search/?category=Beauty';

  const fetchAffiliates = () => {
    fetch(BASE_URL)
    .then(res => {
      if(!res.ok){
        throw Error('There is a server error');
      }
      console.log('res', res);
      return res.json();
     })
     .then(data => {
      console.log('data: ', data);
      setAffiliates(data);
      setIsPending(false);
      })
      .catch(err => {
        console.error(err)
        setErrMsg(err.message)
      }); 
  }

  useEffect(() => {
    fetchAffiliates();

  }, [])

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
        {/* <button className='blue-button'>For You</button> */}
        <button className='blue-button'>For Begginers</button>
        <button className='blue-button'>Categories</button>
        <button className='blue-button'>Best Paying</button>
      </div>
      <div className='affiliates-container dashboard'>
        {isPending ? errMsg ? <div>{errMsg}</div> : <div><img src={loadingGif} alt='loader' /></div> : 
         affiliates.map(affiliate => {
          return (
            <AffiliateCard 
              key={affiliate.affiliate_id}
              name={affiliate.name}
              description={affiliate.description}
              commission={affiliate.commission}
              categories={affiliate.category}
              logo={affiliate.logo}
              data={affiliate.affiliate_link}
            />)
          })
        }
      </div>
    </>
  )
}

export default DashBoard