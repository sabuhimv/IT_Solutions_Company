import React from 'react'
import './ContactMap.css'
const ContactMap = () => {
  return (
    <div className='contact-map-container'>
        <div className='map-box'>
            <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe>
        </div>
    </div>
  )
}

export default ContactMap