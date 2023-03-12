import React, { useEffect } from 'react'
import './HomeDevAgency.css'
import hero5 from '../assets/images/hero-5_img-1.png'
import ButtonOrangeDark from './ButtonOrangeDark'
import ButtonBlueLight from './ButtonBlueLight'

import AOS from "aos";

const HomeDevAgency = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='home-dev-agency-container'>
            <div className="home-dev-agency-text" data-aos="fade-right" data-aos-duration="1000">
                <h1>Web Design & Development Agency</h1>

                <ul className='home-dev-list'>
                    <div>
                    <li>Creative Team Member</li>
                    <li>Professional Services</li>
                    </div>
                    
                    <div>
                    <li>Co-Working Space</li>
                    <li>Digital Marketing</li>
                    </div>
                    
                </ul>

                <div className='home-dev-agency-buttons'>
                    <ButtonOrangeDark orangeDarkValue={"Get Started"} />
                    <ButtonBlueLight blueLightValue={"Explore more"} />
                </div>
            </div>
            
            <div className="home-dev-agency-image" data-aos="fade-left" data-aos-duration="1000">
                <img src={hero5} alt="" />
            </div>
        </div>
    )
}

export default HomeDevAgency