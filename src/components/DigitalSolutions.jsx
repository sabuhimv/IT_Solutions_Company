import React from 'react'
import ITServices from '../pages/ITServices'
import './DigitalSolutions.css'
import ServicesElement from './ServicesElement'
import Button from '../components/Button'

import icon5 from '../assets/images/icon-5.png'
import icon6 from '../assets/images/icon-6.png'
import icon7 from '../assets/images/icon-7.png'
import icon8 from '../assets/images/icon-8.png'
import icon9 from '../assets/images/icon-9.png'
import icon10 from '../assets/images/icon-10.png'

const DigitalSolutions = () => {
    return (
        <div className='digital-solutions-container'>
            <span className='orange-bg-span'>IT SERVICES</span>
            <h2 className='capitalize-h2 text-underline text-center'>Digital Innovative Solutions For <br /> IT Management</h2>

            <div className='ds-elements'>
                <div className='ds-section'>
                    <ServicesElement service_img={icon5} service_name={"Web Design"} />
                    <ServicesElement service_img={icon6} service_name={"Mobile Application Design"} />
                </div>
                <div className='ds-section'>
                    <ServicesElement service_img={icon7} service_name={"Web Design"} />
                    <ServicesElement service_img={icon8} service_name={"Web Design"} />

                </div>
                <div className='ds-section'>
                    <ServicesElement service_img={icon9} service_name={"Web Design"} />
                    <ServicesElement service_img={icon10} service_name={"Web Design"} />
                </div>
            </div>

            <Button buttonDeyeri={"view more services"}/>
        </div>
    )
}

export default DigitalSolutions