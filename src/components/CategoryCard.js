import React from 'react'
import arrowIcon from '../assets/images/arrow-icon.png'

const CategoryCard = ({category}) => {
  return (
    <div className='affiliate-card'>
        <div className='affilaite-container-head'>
            <h3>{category}</h3>
            <div className='arrow-icon-container'>
                <img className='arrow-icon' src={arrowIcon} alt="arrow icon"/>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard