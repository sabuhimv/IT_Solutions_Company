import React from 'react'
import './AgencyStart.css'
import Button from './Button'
import WhiteButton from './WhiteButton'

const AgencyStart = () => {
  return (
    <div className='agency-start-container'>
        <span>professional it solutions</span>
        <h1>Digital Innovation <br /> IT Agency</h1>
        <p>Sed perspiciatis unde omnis natus voluptate accusantiuy doloreue laudantium totam rem aperiam</p>
        <div className='agency-start-button'>
          <Button buttonDeyeri="Get started us" button_path={'../about'}/>
          <WhiteButton buttonValue="How It works" white_button_path={'./it-services'}/>
        </div>
    </div>
  )
}

export default AgencyStart