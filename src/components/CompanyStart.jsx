import React from 'react'
import Button from './Button'
import './CompanyStart.css'
import WhiteButton from './WhiteButton'

const CompanyStart = () => {
  return (
    <div className='company-start-container'>
        <span className='orange-bg-span company-start-span'>professional it solutions</span>
        <h1 className='company-h1'>Digital Software Company</h1>
        <div className='company-start-button'>
          <Button buttonDeyeri="Get started us"/>
          <WhiteButton buttonValue="How It works"/>
        </div>
    </div>
  )
}

export default CompanyStart