import React from 'react'
import './WhyUs.css'
import Solution1 from '../assets/images/solution1.png'
import { WhyUsComponent } from './WhyUsComponent'

import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'

import Creative from '../assets/images/creative.png'
import CustomerLoyalty from '../assets/images/customer-loyalty.png'
import ProductDevelopment from '../assets/images/product-development.png'

const WhyUs = () => {
    return (
        <div className='why-us-container'>
            <div className="why-us-left">
                <div className="why-us-left-top">
                    <span className='orange-span'>why choose us</span>
                    <h2 className='home-h2'>25 Years Of Experience In IT <br /> Solutiuons</h2>
                </div>
                <div className="why-us-left-bottom">
                    <WhyUsComponent wu_img={Creative} w_title="Great Solution For Business" />
                    <WhyUsComponent wu_img={CustomerLoyalty} w_title="Customer Saticfations" />
                    <WhyUsComponent wu_img={ProductDevelopment} w_title="Product Development" />
                </div>
            </div>

            <div className='why-us-right'>
                <div className='why-img'>
                    <img src={gallery1} alt="" />
                </div>
            </div>

        </div>
    )
}

export default WhyUs