import React, {useState, useEffect, useRef} from 'react';
import AffiliateCard from './AffiliateCard';
import loadingGif from '../assets/gifs/loading.gif';
import CategoryCard from './CategoryCard'


const DashBoard = () => {
  const BASE_URL = 'api/v1/affiliates/search/?category=Beginner';

  const [errMsg, setErrMsg] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [affiliates, setAffiliates] = useState([]);
  const isCategoriesRef = useRef(false);
  const urlRef = useRef(BASE_URL);

  const handleCategory = (param) => {
    console.log('param: ', param);
    isCategoriesRef.current = false;
    if(param === "Beginner"){
      urlRef.current = 'api/v1/affiliates/search/?category=Beginner';
    } else if (param === "HighPaying"){
      urlRef.current = 'api/v1/affiliates/search/?category=High Paying';
    } else if (param === "Categories"){
      isCategoriesRef.current = true;
      urlRef.current = '/api/v1/affiliates/categories';
    }
    fetchAffiliates(param);
  }

  const fetchAffiliates = () => {
    setIsPending(true);
    fetch(urlRef.current)
    .then(res => {
      if(!res.ok){
        throw Error('There is a server error');
      }
      console.log('res', res);
      return res.json();
     })
     .then(data => {
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

  useEffect(() => {
    console.log('isCategories: ', isCategoriesRef.current);
    console.log('affiliates: ', affiliates);
  })

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
        <button 
          className='blue-button' 
          onClick={() => handleCategory("Beginner")}
        >
          For Begginers
        </button>
        <button 
          className='blue-button' 
          onClick={() => handleCategory("Categories")}
        >
          Categories
        </button>
        <button 
          className='blue-button' 
          onClick={() => handleCategory("HighPaying")}
        >
          Best Paying
        </button>
      </div>
      <div className='affiliates-container dashboard'>
        {isPending ? errMsg ? <div>{errMsg}</div> : 
         <div className='loader-container'>
            <img src={loadingGif} alt='loader' />
          </div> : 
            isCategoriesRef.current ? 
            affiliates[0].categories.map((category, index) => {
              return <><CategoryCard key={index} category={category}/></>
            }) :
         affiliates.map(data => {
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
          })
        }
      </div>
    </>
  )
}

export default DashBoard