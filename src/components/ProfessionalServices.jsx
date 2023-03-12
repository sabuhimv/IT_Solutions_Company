import React from 'react'
import BlackButton from './BlackButton'
import Button from './Button'
import './ProfessionalServices.css'
const ProfessionalServices = () => {
  return (
    <div className='professional-services-container'>
        <h2 className='text-underline'>Ready To Get Our Professional <br /> IT Services ?</h2>
    
        <div className="ps-button-group">
            <Button buttonDeyeri={"Meet the team"}/>
            <BlackButton BlackButtonValue={"Our Services"}/>
        </div>
    </div>
  )
}

export default ProfessionalServices