import React, { useContext, useState, useEffect } from 'react';

const AffiliateContext = React.createContext();

export const useAffiliate = () => {
    return useContext(AffiliateContext);
}

export const AffiliateProvider = ({ children }) => {
  const [apiUrl, setApiUrl] = useState();
  const [affiliates, setAffiliates] = useState();
  const [isLoading, setLoading] = useState(true);


  const updateApiUrl = (url) => {
    return setApiUrl(url);
  }

  const updateAffiliates = (affiliateList) => {
    setAffiliates(affiliateList);
  }

  const updateLoading = (isLoading) => {
    return setLoading(isLoading);
  }

  useEffect(() => {
    
  }, [])

  const value = {
    apiUrl,
    updateApiUrl,
    affiliates,
    updateAffiliates,
    isLoading,
    updateLoading,

  };

  return (
    <AffiliateContext.Provider value={value}>
        {children}
    </AffiliateContext.Provider>
  )
}
