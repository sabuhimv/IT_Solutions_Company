import React from 'react'
import BlackButton from './BlackButton'
import './Plan.css'

const Plan = ({plan_type,plan_price,li_check}) => {
  return (
    <div className='plan-container'>
        <div className="plan-title">
            <div className="pl-left">
                <h3>{plan_type}</h3>
                <span>25% Savage Package</span>
            </div>
            <div className="pl-right">
                <h3><span>$</span>{plan_price}</h3>
                <span>for Monthly</span>
            </div>
        </div>
        <div className="plan-body">
            <p>Take a trivial example which of us ever undertakes laborious physical exercise On the other hand</p>
            <ul>
                <li className='check'>30 Days Trial Features</li>
                <li className='check'>Synced To Cloud Database</li>
                <li className='check'>Easy Website Builder</li>
                <li className='check'>10 Hours Of Support</li>
                <li className='check'>Social Media Integration</li>
                <li className='check'>Unlimited Features</li>
            </ul>
            <BlackButton BlackButtonValue="Choose this pricing"/>
        </div>

    </div>
  )
}

export default Plan