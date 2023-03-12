import React from 'react'
import './TestimonialsElement.css'
import quote from '../assets/images/quote.png'

const TestimonialsElement = ({testimonials_user,testimonials_title,testimonials_name}) => {
  return (
    <div className='testimonials-element-container'>
        <div className="te-top">
            <div className='testimonials-image'>
                <img src={testimonials_user} alt="" />
            </div>
            <h5>{testimonials_title}</h5> 
        </div>

        <div className="te-text">
            <p className='gray-p'>Quis autem veleum iure rerehenderitey qui in ea voluptate velit esse quamessc nihil molestia consequatur velillum qus dolorem eum fugiat quoes.</p>
        </div>

        <div className="te-foot">
            <div className='quote-image'>
                <img src={quote} alt="" />
            </div>
            <h5>{testimonials_name}</h5>
        </div>
    </div>
  )
}

export default TestimonialsElement