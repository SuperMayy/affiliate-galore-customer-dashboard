import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext.js";
import AffiliateCard from './AffiliateCard';
import allData from '../example-data/res.json';

const MyAffiliates = () => {
  const { currentUser } = useAuth();
  const [errMsg, setErrMsg] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [affiliates, setAffiliates] = useState([]);

  // const getUserData = () => {
  //   fetch(`/api/v1/users/${currentUser.uid}`)
  //   .then(res => {
  //     if(!res.ok){
  //       throw Error('There is a server error');
  //     };
  //     return res.json();
  //    })
  //    .then(data => {
  //       setUserData(data);
  //     })
  //     .catch(err => {
  //       setError(err);
  //     }); 
  // }

  // useEffect(() => {
  //   getUserData();
  // }, [])

  useEffect(() => {
    console.log('currentUser UID', currentUser.uid);
  },[])
  
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