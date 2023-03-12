import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './OurTestimonials.css'
import testimonials4 from '../assets/images/thumb-4.jpg'
import testimonials5 from '../assets/images/thumb-5.jpg'
import testimonials3 from '../assets/images/thumb-3.jpg'

import TestimonialsElement from './TestimonialsElement';

import { Autoplay } from "swiper";

const OurTestimonials = () => {
    return (
        <div className='our-testimonials-container'>
            <span className='orange-bg-span'>Our TESTIMONIALS</span>
            <h2 className='capitalize-h2 text-underline'>What Our Clients Say About Our IT <br /> Solutions</h2>

            <div className='testimonials-swiper'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    // modules={[Pagination]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        997: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1300: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper testimonials-swiper"
                >
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials4} testimonials_title={'“Quality Team”'} testimonials_name="Courtney F. Schlem" /></SwiperSlide>
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials5} testimonials_title={'“Clean Code”'} testimonials_name="Herbert L. McCoy" /></SwiperSlide>
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials3} testimonials_title={'“Quality Team”'} testimonials_name="Robert D. Matthews" /></SwiperSlide>
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials4} testimonials_title={'“Quality Team”'} testimonials_name="Courtney F. Schlem" /></SwiperSlide>
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials5} testimonials_title={'“Clean Code”'} testimonials_name="Herbert L. McCoy" /></SwiperSlide>
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials3} testimonials_title={'“Quality Team”'} testimonials_name="Robert D. Matthews" /></SwiperSlide>
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials4} testimonials_title={'“Quality Team”'} testimonials_name="Courtney F. Schlem" /></SwiperSlide>
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials5} testimonials_title={'“Clean Code”'} testimonials_name="Herbert L. McCoy" /></SwiperSlide>
                    <SwiperSlide><TestimonialsElement testimonials_user={testimonials3} testimonials_title={'“Quality Team”'} testimonials_name="Robert D. Matthews" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default OurTestimonials