import React from 'react'
import './HomeDevCta.css'
import cta_img from '../assets/images/cta-img-1.png'
import shape6 from '../assets/images/shape-6.png'
const HomeDevCta = () => {
  return (
    <div className='home-dev-cta-container'>
        <div className='cta-shape'>
            <img src={shape6} alt="" />
        </div>
        <div className="dev-cta-left">
            <span className='white-span'>need any Project ?</span>
            <h2>Ready To Work With Us For Web Solutions ?</h2>
            <p className='gray-p'>Sed ut perspiciatis unde omnis iste natus erroluptatem accus antium doloremue laudantium totam</p>
        
            <a href="" className='transparent-link'>Get Free Quote</a>
        </div>
        <div className="dev-cta-image">
            <img src={cta_img} alt="" />
        </div>
    </div>
  )
}

export default HomeDevCta