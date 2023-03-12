import React from 'react'
import './HelpDeskFeedback.css'
import helpfeedback from '../assets/images/testimonial-bg-3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import user_swiper from '../assets/images/user-5.jpg'

const HelpDeskFeedback = () => {
    return (
        <div className='help-desk-feedback-container'>
            <div className='help-desk-feedback-left'>
                <img src={helpfeedback} alt="" />
            </div>
            <div className='help-desk-feedback-right'>
                <span className='blue-span'>Clients feedback</span>
                <h2 className='capitalize-h2'>What Clients Say About Muntech <br /> Supports</h2>
            </div>
        </div>
    )
}

export default HelpDeskFeedback