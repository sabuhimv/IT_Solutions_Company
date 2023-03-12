import React from 'react'
import './AboutUsServices.css'

import product from '../assets/images/new-product.png'
import target from '../assets/images/target.png'
import cyper_security from '../assets/images/cyber-security.png'
import booking from '../assets/images/booking.png'
import web_design from '../assets/images/web-design.png'

const AboutUsServices = () => {
    return (
        <div className='about-us-services-container'>

            <div className="about-service web-component">
                <div className="about-icon web-icon">
                    <img src={web_design} alt="" />
                </div>
                <div className="about-text">
                    <a href="">Web Design</a>
                    <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
                </div>
            </div>

            <div className="about-service booking-component">
                <div className="about-icon booking-icon">
                    <img src={booking} alt="" />
                </div>
                <div className="about-text">
                    <a href="">Mobile Apps</a>
                    <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
                </div>
            </div>

            <div className="about-service cyper-component">
                <div className="about-icon cyper-icon">
                    <img src={cyper_security} alt="" />
                </div>
                <div className="about-text">
                    <a href="">Cyber Security</a>
                    <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
                </div>
            </div>


            <div className="about-service product-component">
                <div className="about-icon product-icon">
                    <img src={product} alt="" />
                </div>
                <div className="about-text">
                    <a href="">Product Strategy</a>
                    <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
                </div>
            </div>

            <div className="about-service target-component">
                <div className="about-icon target-icon">
                    <img src={target} alt="" />
                </div>
                <div className="about-text">
                    <a href="">QA & Tasting</a>
                    <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
                </div>
            </div>


        </div>
    )
}

export default AboutUsServices