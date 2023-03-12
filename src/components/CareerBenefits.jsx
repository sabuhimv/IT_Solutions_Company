import React from 'react'
import './CareerBenefits.css'
import img7 from '../assets/images/img-7.jpg'
import img8 from '../assets/images/img-8.jpg'
import img9 from '../assets/images/img-9.jpg'
import img10 from '../assets/images/img-10.jpg'

import shield from '../assets/images/shield.png'
import pouch from '../assets/images/pouch.png'
import support from '../assets/images/support.png'

const CareerBenefits = () => {
  return (
    <div className='career-benefits-container'>
        <div className="career-benefits-text">
            <h2>Benifits You Receive</h2>
            <p className='gray-p'>Sed perspiciatis omnis natus voluptate accusantie doloremque laudantium totam rem aperiam eaque quaea</p>
        
            <div className='career-benefit'>
                <div className="career-benefit-icon">
                    <img src={shield} alt="" />
                </div>
                <div className="career-benefit-text">
                    <h4>Security & Job Guarantee</h4>
                    <p className='gray-p'>Sed perspiciatis unde omnis voluptate accusantie doloremque laudantium totam rem aperiam</p>
                </div>
            </div>
            <div className='career-benefit'>
                <div className="career-benefit-icon career-benefit-orange-icon">
                    <img src={pouch} alt="" />
                </div>
                <div className="career-benefit-text">
                    <h4>Project Bonuse & Increments</h4>
                    <p className='gray-p'>Sed perspiciatis unde omnis voluptate accusantie doloremque laudantium totam rem aperiam</p>
                </div>
            </div>
            <div className='career-benefit'>
                <div className="career-benefit-icon career-support-icon">
                    <img src={support} alt="" />
                </div>
                <div className="career-benefit-text">
                    <h4>Friendly Enviornments</h4>
                    <p className='gray-p'>Sed perspiciatis unde omnis voluptate accusantie doloremque laudantium totam rem aperiam</p>
                </div>
            </div>
            
        </div>
        <div className="careet-benefits-image">
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
        </div>
    </div>
  )
}

export default CareerBenefits