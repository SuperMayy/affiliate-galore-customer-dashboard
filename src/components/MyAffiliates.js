import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext.js";
import AffiliateCard from './AffiliateCard';
import loadingGif from '../assets/gifs/loading.gif';

const MyAffiliates = () => {
  const { currentUser } = useAuth();
  const [errMsg, setErrMsg] = useState(null);
  const [affiliates, setAffiliates] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const getUsersAffiliates = () => {
    setIsPending(true);
    fetch(`${process.env.REACT_APP_AG_API}/api/v1/users/affiliates/${currentUser.uid}`)
    .then(res => {
      if(!res.ok){
        throw Error('There is a server error');
      };
      return res.json();
     })
     .then(data => {
        setAffiliates(data);
        setIsPending(false);
      })
      .catch(err => {
        setErrMsg(err);
      }); 
  }

  useEffect(() => {
    getUsersAffiliates();
  }, [])
  
  return (
    <>
    <div className='affiliates-container'>
        { isPending ? errMsg ? <div>{errMsg}</div> :  
         <div className='loader-container'>
            <img src={loadingGif} alt='loader' />
          </div> :  
          affiliates.map(data => {
          return (
          <AffiliateCard 
            key={data.affiliate_id}
            name={data.name}
            description={data.description}
            commission={data.commission}
            categories={data.category}
            logo={data.logo}
            affiliateLink={data.affiliate_link}
            msg={data.msg}
            affiliateList={true}
            affiliateId={data.affiliate_id}
          />)
        })}
    </div>
    </>
  )
}

export default MyAffiliates