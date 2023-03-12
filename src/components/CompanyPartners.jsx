import React from 'react'
import './CompanyPartners.css'

import Partner from './Partner'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

import company7 from '../assets/images/07.png'
import company8 from '../assets/images/08.png'
import company9 from '../assets/images/09.png'
import company10 from '../assets/images/10.png'

const CompanyPartners = () => {
    return (
        <div className='company-partners-container'>
            <div className='cp-swiper'>
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
                        250: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        900: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><Partner image={company7} /></SwiperSlide>
                    <SwiperSlide><Partner image={company8} /></SwiperSlide>
                    <SwiperSlide><Partner image={company9} /></SwiperSlide>
                    <SwiperSlide><Partner image={company10} /></SwiperSlide>
                    <SwiperSlide><Partner image={company7} /></SwiperSlide>
                    <SwiperSlide><Partner image={company8} /></SwiperSlide>
                    <SwiperSlide><Partner image={company9} /></SwiperSlide>
                    <SwiperSlide><Partner image={company10} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CompanyPartners