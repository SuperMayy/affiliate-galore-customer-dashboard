import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext.js";
import AffiliateCard from './AffiliateCard';

const MyAffiliates = () => {
  const { currentUser } = useAuth();
  const [err, setErrMsg] = useState(null);
  const [affiliates, setAffiliates] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const getUsersAffiliates = () => {
    fetch(`/api/v1/users/affiliates/${currentUser.uid}`)
    .then(res => {
      if(!res.ok){
        throw Error('There is a server error');
      };
      return res.json();
     })
     .then(data => {
        setAffiliates(data);
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
        { affiliates.map(data => {
          return (
            //make parameter to add remove from affiliate list button.
            //deal with erros and sucess message of no affilaites
          <AffiliateCard 
            key={data.affiliate_id}
            name={data.name}
            description={data.description}
            commission={data.commission}
            categories={data.category}
            logo={data.logo}
            data={data.affiliate_link}
            msg={data.msg}
            affiliateList={true}
          />)
        })}
    </div>
    </>
  )
}

export default MyAffiliates