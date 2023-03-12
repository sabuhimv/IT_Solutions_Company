import React from 'react'
import './OurOffer.css'
import offer_image from '../assets/images/img-3.jpg'
const OurOffer = () => {
  return (
    <div className='offer-container'>
        <div className="offer-left">
            <span>what we offer</span>
            <h2 className='text-underline offer-head'>Best Categoris For Your <br /> Software Solutions</h2>
            <p className='gray-p'>Sed perspiciatis unde omnis natus voluptate accusantie <br /> doloremque laudantium totam rem aperiam eaque quaea vtore <br /> eritatis quasi architecto beatae vitae</p>
            <div className='offer-years'>
                <h2>25</h2>
                <div className='years-text'>
                    <h4>Years Of Experience We <br /> Provides</h4>
                    <p className='gray-p'>Perspiciatis unde onatus <br /> voluptate dolore laudantie totam <br /> rem aperiam</p>
                </div>
            </div>

        </div>
        <div className="offer-right">
            <img src={offer_image} alt="" />
        </div>
    
    </div>
  )
}

export default OurOffer