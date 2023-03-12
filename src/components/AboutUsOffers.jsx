import React, { useEffect } from 'react'
import './AboutUsOffers.css'
import AOS from "aos";

import about_us_1 from '../assets/images/about-10.jpg'
import about_us_2 from '../assets/images/about-11.jpg'
const AboutUsOffers = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='about-us-offers-container'>
        <div className='about-us-left' data-aos="fade-right" data-aos-duration="1000">
            <span className='orange-bg-span'>What we offer</span>
            <h2 className='text-underline capitalize-h2'>We Care IT Business to Made <br />  Great Success</h2>
            <p className='gray-p'>Sed perspiciatis unde omnis natus voluptate accusantie <br /> doloremque laudantium totam rem aperiam eaque quaea vtore eritatis quasi architecto beatae vitae</p>
            <span className='about-offers-content'>Unde omnis natus voluptate accusantie doloremqu dan totam rem aperiam eaque quaea vtore eritatis</span>
            
            <div className='about-offers-check'>
                <div className='about-offers-check-top'>
                    <span>Professional Services</span>
                    <span>Experience Advisors</span>
                </div>
                <div className='about-offers-check-bottom'>
                    <span>Software Development</span>
                    <span>Product Engineering</span>
                </div>
            </div>

        </div>
        <div className='about-us-right'>
            <img className='about-1' src={about_us_1} alt="" />
            <img className='about-2' src={about_us_2} alt="" />
        </div>
    </div>
  )
}

export default AboutUsOffers