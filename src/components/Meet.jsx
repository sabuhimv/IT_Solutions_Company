import React, { useEffect } from 'react'
import './Meet.css'
import Button from './Button'
import AOS from "aos";

const Meet = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='meet-container'>
        <div data-aos="zoom-in-right" data-aos-duration="2000" className='meet-left'>
            <h3 className="text-underline">Full Truckload Planning Reimagined Experts in Security Dynamic Load Planning & Dispatching</h3>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000" className='meet-right'>
            <Button buttonDeyeri="Let’s meet us"/>
        </div>
    </div>
  )
}

export default Meet