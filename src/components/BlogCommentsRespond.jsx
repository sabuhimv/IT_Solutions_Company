import React from 'react'
import './BlogCommentsRespond.css'
import Button from './Button'
const BlogCommentsRespond = () => {
    return (
        <div className='blog-comments-respond-container'>
            <div className='comments-respond-title'>
                <h4 className='capitalize-h4'>Popular Comments (5)</h4>
                <p className='gray-p'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            </div>

            <div className='comments-respond-inputs'>
                <div className='contact-form-group'>
                    <input type="text" className='contact-form-element' placeholder='Your Full Name' />
                    <input type="text" className='contact-form-element' placeholder='Phone Number' />
                    <input type="email" className='contact-form-element' placeholder='Email Address' />
                    <input type="url" className='contact-form-element' placeholder='Website' />
                </div>
                <div className='contact-form-group'>
                    <textarea name="message" className='contact-form-element' placeholder='Comments' id="" cols="30" rows="100"></textarea>
                </div>

                <div className='contact-form-button'>
                    <Button buttonDeyeri={"Send Message"}/>
                </div>
            </div>
        </div>
    )
}

export default BlogCommentsRespond