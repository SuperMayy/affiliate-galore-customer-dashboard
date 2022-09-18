import React from 'react';
import arrowIcon from '../assets/images/arrow-icon.png';
import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {

  return (
    <>
      <Link to={`/affiliate-categories/${category}`}>
        <div className='affiliate-card'>
          <div className='affilaite-container-head'>
              <h3>{category}</h3>
              <div className='arrow-icon-container'>
                  <img className='arrow-icon' src={arrowIcon} alt="arrow icon"/>
              </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CategoryCard