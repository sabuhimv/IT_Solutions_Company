import React from 'react'
import './ServicesElement.css'
// import icon5 from '../assets/images/icon-5.png'
const ServicesElement = ({service_img,service_name}) => {
    return (
        <div className='services-element-container'>
            <div className='se-img'>
                <img src={service_img} alt="" />
            </div>
            <div className='se-text'>
                <a href="" className='service-name'>{service_name}</a>
                <p className='gray-p'>Sed ut perspiciatis unde omnis istere errorsit voluptatem accusa</p>
                <a href="" className='service-more'>Read More</a>
            </div>

        </div>
    )
}

export default ServicesElement