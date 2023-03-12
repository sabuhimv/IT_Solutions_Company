import React from 'react'
import './HelpDeskReport.css'
import gallery5 from '../assets/images/gallery-5.jpg' 
import meeting from '../assets/images/meeting.png'
import online_chat from '../assets/images/online-chat.png'

const HelpDeskReport = () => {
  return (
    <div className='help-report-container'>
        <div className='help-report-image'>
            <img src={gallery5} alt="" />
        </div>
        <div className='help-report-text'>
            <span className='blue-span'>WHAT YOU CAN WE DO</span>
            <h2 className='capitalize-h2'>Manage Your Email & Data Communication Tasks</h2>
        
            <div className='help-report-element'>
                <div className='help-report-element-icon'>
                    <img src={online_chat} alt="" />
                </div>
                <div className='help-report-element-text'>
                    <h5 className='black-h5'>Make Better Decisions Based on Data</h5>
                    <p className="gray-p">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudan totam <br /> rem aperiam, eaque ipsa quae abillo</p>
                </div>
            </div>

            <div className='help-report-element'>
                <div className='help-report-element-icon'>
                    <img src={meeting} alt="" />
                </div>
                <div className='help-report-element-text'>
                    <h5 className='black-h5'>Make Better Decisions Based on Data</h5>
                    <p className="gray-p">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudan totam <br /> rem aperiam, eaque ipsa quae abillo</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpDeskReport