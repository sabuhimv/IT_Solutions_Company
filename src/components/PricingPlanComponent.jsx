import React from 'react'
import BlackButton from './BlackButton'
import Button from './Button'
import './PricingPlanComponent.css'
const PricingPlanComponent = ({pricing_currency}) => {
    return (
        <div className='pricing-plan-component-container'>
            <h3><span className='currency'>$</span>{pricing_currency}<span className='sm-text'>Monthly</span></h3>
            <h3 className='pp-title'>Basic Plan</h3>
            <span className='gray-span pp-discount'>25% Save Package</span>
            {/* <span className='orange-bg-span'>Choose this pricing</span> */}
            <Button buttonDeyeri="Choose this pricing"/>
            <ul>
                <li className='check'>30 Days Trial Features</li>
                <li className='check'>Cloud Database</li>
                <li className='check'>Easy Website Builder</li>
                <li className='uncheck'>10 Hours Of Support</li>
                <li className='uncheck'>Unlimited Features</li>
            </ul>
        </div>
    )
}

export default PricingPlanComponent