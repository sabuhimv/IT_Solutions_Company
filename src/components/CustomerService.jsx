import React from 'react'
import './CustomerService.css'
import customer_img from '../assets/images/fancy-bg-1.jpg'
import Button from './Button'
import customer_service from '../assets/images/customer-service.png'
import networking from '../assets/images/networking.png'

const CustomerService = () => {
  return (
    <div className='customer-service-container'>
        <div className="customer-service-left">
            <img src={customer_img} alt="" />
        </div>
        <div className="customer-service-right">
            <span className='orange-span'>customer-service</span>
            <h2>Artificial Intelligence <br /> Specifically Product Design Ready to Join Future?</h2>
            <div className='customer-section'>
                <div className='customer-icon'>
                    <img src={networking} alt="" />
                </div>
                <p className='gray-p'>Sed ut perspiciatis unde omnis iste natus error sit <br /> volupte accusantium doloremque laudantium <br /> totam rem aperiams eaque quae abillo</p>
            </div>
            <div className='customer-section'>
                <div className='customer-icon'>
                    <img src={customer_service} alt="" />
                </div>
                <p className='gray-p'>Sed ut perspiciatis unde omnis iste natus error sit <br /> volupte accusantium doloremque laudantium <br /> totam rem aperiams eaque quae abillo</p>
            </div>
            <Button buttonDeyeri="Meet Our Team" button_path={'../contact'}/>
        </div>
    </div>
  )
}

export default CustomerService