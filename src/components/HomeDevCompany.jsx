import React, { useEffect } from 'react'
import './HomeDevCompany.css'
import dev_about from '../assets/images/about-8.png'
import { BiLayerPlus } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import AOS from "aos";

const HomeDevCompany = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='home-dev-company-container'>
        <div className="dev-company-image" data-aos="fade-right" data-aos-duration="1000">
            <img src={dev_about} alt="" />
        </div>

        <div className="dev-company-text" data-aos="fade-left" data-aos-duration="1000">
            <span className='blue-light-span'>ABOUT COMPANY</span>
            <h2 className='capitalize-h2'>We’re Digital Web Design And Development Agency</h2>
            <span className='dev-quote'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremue laudantium totam rem aperiam eaque ipsa quaeabe inventore veritatis et quasi architecto beatae vitae dicta sunt</span>
        
            <div className='dev-company-visions'>
                <div className='dc-vision'>
                    <div className="dc-vision-icon">
                        <BiLayerPlus/>
                    </div>
                    <div className="dc-vision-text">
                        <h4 className='capitalize-h4'>Mission & Vision</h4>
                        <p className='gray-p'>Sorem amet conse ctetur adipiscing elitse eiusmotem incididunt labore dolore</p>
                    </div>
                </div>
                <div className='dc-vision'>
                <div className="dc-vision-icon">
                        <FaMedal/>
                    </div>
                    <div className="dc-vision-text">
                        <h4 className='capitalize-h4'>Company Goals</h4>
                        <p className='gray-p'>Sorem amet conse ctetur adipiscing elitse eiusmotem incididunt labore dolore</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default HomeDevCompany