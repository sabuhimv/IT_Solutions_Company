import React from 'react'
import PagesHead from '../components/PagesHead'
import Plan from '../components/Plan'
import Pricing from '../components/Pricing'
import PricingPackage from '../components/PricingPackage'

const PricingPlan = () => {
  return (
    <div className='pricing-plan-container'>
      <PagesHead pages_name="Pricing Plan" />
      
      <PricingPackage/>

      <div className="awesome-pricing-plan">
        <span className='orange-bg-span'>Awesome pricing plan</span>
        <h2 className='text-underline capitalize-h2'>we provide an smart pricing<br />package for it solutions</h2>

        <div className='awesome-pricing-plan-body'>
          <Plan plan_type="Basic Plan" plan_price="19.99" />
          <Plan plan_type="Regular Plan" plan_price="39.99" />
          <Plan plan_type="Silver Plan" plan_price="99.99" />
        </div>
      </div>

    </div>

  )
}

export default PricingPlan