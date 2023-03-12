import React from 'react'
import './CustomerFeedback.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import FeedbackItem from './FeedbackItem';
import web_designer from '../assets/images/user-5.jpg'
import senior_developer from '../assets/images/user-6.jpg'

const CustomerFeedback = () => {
    return (
        <div className='customer-feedback-container'>
            <div className="feedback-text">
                <span>customer feedback</span>
                <h2>What Our Clients Say About <br /> Services</h2>
                <p>Consectetur adipiscing elit sed eiusmod tempor incididunt ut <br /> labore et dolore magna aipsum spedis se ultrices gravida <br /> commodo viverra</p>
            </div>
            <div className="feedback-swiper">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        300:{
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        1400: {
                          slidesPerView: 2,
                          spaceBetween: 50,
                        },
                      }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><FeedbackItem feedback_img={web_designer} feedback_name="Norman E. Beeks" feedback_job="Web Designer"/></SwiperSlide>
                    <SwiperSlide><FeedbackItem feedback_img={senior_developer} feedback_name="Lynn M. Sabatine" feedback_job="Senior Developer"/></SwiperSlide>
                    <SwiperSlide><FeedbackItem feedback_img={web_designer} feedback_name="Norman E. Beeks" feedback_job="Web Designer"/></SwiperSlide>
                    <SwiperSlide><FeedbackItem feedback_img={senior_developer} feedback_name="Lynn M. Sabatine" feedback_job="Senior Developer"/></SwiperSlide>
                    <SwiperSlide><FeedbackItem feedback_img={web_designer} feedback_name="Norman E. Beeks" feedback_job="Web Designer"/></SwiperSlide>
                    <SwiperSlide><FeedbackItem feedback_img={senior_developer} feedback_name="Lynn M. Sabatine" feedback_job="Senior Developer"/></SwiperSlide>
                    
                    
                </Swiper>
            </div>
        </div>
    )
}

export default CustomerFeedback