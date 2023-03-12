import React from 'react'
import './Quote.css'
import quote_user from '../assets/images/quote-user.jpg'

const Quote = () => {
  return (
    <div className='quote-container'>
        <div className="quote-left">
            <img src={quote_user} alt="" />
        </div>
        <div className="quote-right">
            <h3>Full Truckload Planning Reimagined Experts in Security Dynamic Load <br /> Planning & Dispatching</h3>
        </div>
    </div>
  )
}

export default Quote