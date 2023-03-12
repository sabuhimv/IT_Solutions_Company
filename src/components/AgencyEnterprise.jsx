import React from 'react'
import './AgencyEnterprise.css'
import agency_img from '../assets/images/about-7.jpg'
import Button from './Button'
const AgencyEnterprise = () => {
  return (
    <div className='agency-enterprise-container'>
        <div className="agency-enterprise-left">
            <img src={agency_img} alt="" />
        </div>
        <div className="agency-enterprise-right">
            <span className='orange-span'>ABOUT MUNTECH</span>
            <h2 className='home-h2'>Enterprise Productivity Platform For Complex Data</h2>
            <p className='gray-p'>Sed perspiciatis unde omniste natus voluptate accusantiuy doloremque laudantium totam reyap eriam eaque quae ainvtore veritatis quase</p>
            <Button buttonDeyeri="Learn More Us" button_path={"../about"}/>
        </div>


    </div>
  )
}

export default AgencyEnterprise