import React, { useEffect } from 'react'
import Plan from './Plan'
import './Pricing.css'

import AOS from "aos";

const Pricing = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='pricing-container'>
            <div className='pricing-head home-pricing-head'>
                <div className="ph-left">
                    <span className='orange-span'>Awesome pricing plan</span>
                    <h2 className='home-h2'>we provide an smart pricing <br /> package for it solutions</h2>
                </div>
                <div className="ph-right">
                    <a href="">MONTHLY</a>
                    <a href="">YEARLY</a>
                </div>
            </div>

            <div className='pricing-body'>
                <Plan plan_type="Basic Plan" plan_price="19.99" />
                <Plan plan_type="Regular Plan" plan_price="39.99" />
                <Plan plan_type="Silver Plan" plan_price="99.99" />
            </div>


        </div>
    )
}

export default Pricing