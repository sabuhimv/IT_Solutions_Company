import React from 'react'
import './CyberDigitalELement.css'
import ss from '../assets/images/cyber-security-1.png'
const CyberDigitalElement = ({cyber_img,cyber_title}) => {
    return (
        <div className='cyber-digital-element-container'>
            <div className='cd-icon'>
                <img src={cyber_img} alt="" />
            </div>
            <a href="" className='service-name'>{cyber_title}</a>
            <p className='gray-p'>Sed perspiciatis unde oms natus sit voluptate accusate doloremque laudantium</p>
            <a href="" className='service-more'>Read More</a>
        </div>
    )
}

export default CyberDigitalElement