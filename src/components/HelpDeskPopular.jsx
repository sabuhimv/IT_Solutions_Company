import React from 'react'
import './HelpDeskPopular.css'
import h12 from '../assets/images/12.png'
import h13 from '../assets/images/13.png'
import h14 from '../assets/images/14.png'
import h15 from '../assets/images/15.png'
import h16 from '../assets/images/16.png'
import h17 from '../assets/images/17.png'
import h18 from '../assets/images/18.png'
import h19 from '../assets/images/19.png'
const HelpDeskPopular = () => {
    return (
        <div className='help-desk-popular-container'>
            <div className="help-popular-title">
                <span className='blue-span'>popular clients</span>
                <h2 className='capitalize-h2'>We Have More Then  <span className='red-dark'>36254+ <br /></span>Golden Trusted Partner</h2>
            </div>

            <div className='help-popular-body'>
                <div className="help-popular-body-top">
                    <img src={h12} alt="" />
                    <img src={h13} alt="" />
                    <img src={h14} alt="" />
                    <img src={h15} alt="" />
                </div>
                <div className="help-popular-body-bottom">
                    <img src={h16} alt="" />
                    <img src={h17} alt="" />
                    <img src={h18} alt="" />
                    <img src={h19} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HelpDeskPopular