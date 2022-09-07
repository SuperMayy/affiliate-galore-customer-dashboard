import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext.js";
import AffiliateCard from './AffiliateCard';
import allData from '../example-data/res.json';

const MyAffiliates = () => {
  const { currentUser } = useAuth();
  const [errMsg, setErrMsg] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [affiliates, setAffiliates] = useState([]);

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