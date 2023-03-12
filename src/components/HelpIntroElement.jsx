import React, {useEffect} from 'react'
import './HelpIntroElement.css'
import service from '../assets/images/customer-service.png'

import AOS from "aos";

const HelpIntroElement = ({ help_element_icon, help_element_title }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return (
        <div className='help-intro-element-container' data-aos="zoom-in" data-aos-duration="1500">
            <div className='help-intro-element-icon'>
                <img src={help_element_icon} alt="" />
            </div>
            <h4 className='capitalize-h4'>{help_element_title}</h4>
            <p className='gray-p'>Sed ut perspiciatis unde oniste atus error volutatem accusu dolore lauda</p>
            <a href="/it-services" className='service-more'>read more</a>

            <div className='middle'>
                <a href="/it-services" className='services-text'>read more</a>
            </div>
        </div>
    )
}

export default HelpIntroElement