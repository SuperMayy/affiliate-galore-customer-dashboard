import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AffiliateCard from './AffiliateCard';
import loadingGif from '../assets/gifs/loading.gif';

const AffiliateCategoryPage = () => {
  let { category } = useParams();
  const [errMsg, setErrMsg] = useState(null);
  const [affiliates, setAffiliates] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const getCategoryAffiliates = () => {
    setIsPending(true);
    fetch(`${process.env.REACT_APP_AG_API}/api/v1/affiliates/search/?category=${category}`)
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
    getCategoryAffiliates();
  }, [])

  return (
    <div>
        { isPending ? errMsg ? <div>{errMsg}</div> :  
         <div className='loader-container'>
            <img src={loadingGif} alt='loader' />
          </div> : affiliates.map(data => {
          return (
          <AffiliateCard 
            key={data.affiliate_id}
            name={data.name}
            description={data.description}
            commission={data.commission}
            categories={data.category}
            logo={data.logo}
            data={data.affiliate_link}
            msg={data.msg}
          />)
        })}
    </div>
  )
}

export default AffiliateCategoryPage