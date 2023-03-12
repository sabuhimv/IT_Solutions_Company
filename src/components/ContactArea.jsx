import React from 'react'
import Button from './Button'
import './ContactArea.css'

const ContactArea = () => {
    return (
        <div className='contact-area'>
            <div className="contact-area-head">
                <span className='orange-span'>needs any help ?</span>
                <h2 className='home-h2'>We’re Ready To Help You! <br /> Requst Free Consultations</h2>
            </div>
            <div className="contact-area-body">
                <div className="contact-area-body-top">
                    <input type="text" placeholder='Full Name Here' />
                    <input type="email" placeholder='Email Address' />
                    <input type="text" placeholder='Phone Number' />
                </div>
                <div className="contact-area-body-bottom">
                    <input type="text" placeholder='Website' />
                    <select name="option" id="contact-area-option">
                        <option value="1">Customer Support</option>
                        <option value="2">Sales Service</option>
                    </select>
                    <div className='contact-area-body-button'>
                        <Button buttonDeyeri="Send Request Now" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ContactArea