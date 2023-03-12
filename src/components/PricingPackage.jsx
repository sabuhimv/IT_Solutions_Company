import React from 'react'
import './PricingPackage.css'
import PricingPlanComponent from './PricingPlanComponent'
const PricingPackage = () => {
    return (
        <div className='pricing-package'>
            <div className='pricing-head'>
                <div className="ph-left">
                    <span className='orange-bg-span'>our pricing package</span>
                    <h2 className='text-underline capitalize-h2'>We Provide An Smart Pricing Package For <br /> IT Solutions</h2>
                </div>
                <div className="ph-right">
                    <a href="">MONTHLY</a>
                    <a href="">YEARLY</a>
                </div>
            </div>

            <div className="pp-body">
                <div>
                    <PricingPlanComponent pricing_currency={"19.99"}/>
                    <PricingPlanComponent pricing_currency={"29.97"}/>
                </div>

                <div>
                    <PricingPlanComponent pricing_currency={"63.92"}/>
                    <PricingPlanComponent pricing_currency={"89.99"}/>
                </div>

            </div>
        </div>
    )
}

export default PricingPackage