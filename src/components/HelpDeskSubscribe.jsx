import React from 'react'
import './HelpDeskSubscribe.css'

const HelpDeskSubscribe = () => {
  return (
    <div className='help-desk-subscribe-container'>
      <div className='help-subscribe-left'>
        <span className='blue-span'>Subscribe newsletters</span>
        <h2 className='capitalize-h2'>Get Every Single Update Join <br /> and Subscribe</h2>
      </div>
      
      <div className='help-subscribe-right'>
        <p className='gray-p'>Sed ut perspiciatis unde omnis iste natus error sit ptatem <br /> accusantium doloremque totam</p>
        <input type="email" placeholder="Email Address" />

        <button className='help-orange-button'>sign up</button>
      </div>

    </div>
  )
}

export default HelpDeskSubscribe