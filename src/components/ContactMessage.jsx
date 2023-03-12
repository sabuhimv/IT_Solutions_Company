import React from 'react'
import Button from './Button'
import './ContactMessage.css'
const ContactMessage = () => {
    return (
        <div className='contact-message-container'>
            <div className="contact-message-title">
                <h2 className='capitalize-h2'>Send Us Message</h2>
                <h5>Don’t Hesited To Contact With Us! Feel Free To Message Us</h5>
            </div>

            <form className="contact-form">

                <div className='contact-form-group'>
                    <input type="text" pattern="[A-Za-z]{1,32}" minlength="3" required className='contact-form-element' placeholder='Full Name' />
                    <input type="text" className='contact-form-element' pattern="[0-9]{10}" minlength="3" required placeholder='Phone Number' />
                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className='contact-form-element' placeholder='Email Address' />
                    <input type="url" required className='contact-form-element' placeholder='Website' />
                </div>

                <div className='contact-form-group'>
                    <textarea name="message" required className='contact-form-element' placeholder='Write Message' id="" cols="30" rows="100"></textarea>
                </div>
                <div className='contact-form-button'>
                    <button className='contact-message-button'>Send Message</button>
                </div>

            </form>
        </div>
    )
}

export default ContactMessage