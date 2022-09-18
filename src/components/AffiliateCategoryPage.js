import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AffiliateCard from './AffiliateCard';

const AffiliateCategoryPage = () => {
  let { category } = useParams();
  const [err, setErrMsg] = useState(null);
  const [affiliates, setAffiliates] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const getCategoryAffiliates = () => {
    fetch(`/api/v1/affiliates/search/?category=${category}`)
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
    getCategoryAffiliates();
  }, [])

  return (
    <div>
        { affiliates.map(data => {
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