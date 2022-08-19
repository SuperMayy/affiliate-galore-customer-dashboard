import React from 'react'

const AffiliateCard = () => {
  return (
    <div className='affiliate-card'>
        <div className='affilaite-container-head'>
            <h3>Booking.com</h3>
            <img 
                alt="booking.com-logo" 
                src="https://getlasso.co/wp-content/uploads/booking-com.png"
                className='affiliate-logo' 
            />
        </div>
        <p>First started in 1996, Booking.com is one of the largest eCommerce travel companies in the world.</p>
        <p>Commision: 25% - 40% Per Sale</p>
        <div className='category-list'><p>Category: </p> 
            <ul className='categories'>
                <li>Airline,</li>
                <li>High-Paying,</li>
                <li>Hotel,</li>
                <li>Travel</li>
            </ul>
        </div>
        <button className='join-affiliate-button'>Join this Affiliate Program</button>
    </div>
  )
}

export default AffiliateCard;