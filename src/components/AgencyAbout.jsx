import React from 'react'
import './AgencyAbout.css'
import agency1 from '../assets/images/img-4.jpg'
import agency2 from '../assets/images/img-5.jpg'
import agency3 from '../assets/images/img-6.jpg'

const AgencyAbout = () => {
  return (
    <div className='agency-about-container'>
      <div className='agency-about-head'>
        <span className='orange-span'>Who we are</span>
        <p className='black-h3'>Important insights that enterprises require to serve customers and <br /> make decisions is buried in silos in huge volumes of data like invoices,<br /> physical contracts, applications</p>
      </div>
      <div className='agency-about-body'>
        
        <div className='agency-about-section'>
          <div className='aa-section-img'>
            <img src={agency1} alt="" />
          </div>
          <div className='aa-section-text'>
            <h3>Unlock Trapped Solution</h3>
            <p>Sedut perspicias unomnis natus sit</p>
          </div>
        </div>

        <div className='agency-about-section'>
          <div className='aa-section-img'>
            <img src={agency2} alt="" />
          </div>
          <div className='aa-section-text'>
            <h3>Unlock Trapped Solution</h3>
            <p>Sedut perspicias unomnis natus sit</p>
          </div>
        </div>

        <div className='agency-about-section'>
          <div className='aa-section-img'>
            <img src={agency3} alt="" />
          </div>
          <div className='aa-section-text'>
            <h3>Unlock Trapped Solution</h3>
            <p>Sedut perspicias unomnis natus sit</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AgencyAbout