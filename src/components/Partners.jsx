import React from 'react'
import './Partners.css'
import Partner from './Partner'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay,Pagination } from "swiper";

import company1 from '../assets/images/01.png'
import company2 from '../assets/images/02.png'
import company3 from '../assets/images/03.png'
import company4 from '../assets/images/04.png'
import company5 from '../assets/images/05.png'
import company6 from '../assets/images/06.png'

const Partners = () => {
    return (
        <div className='partners'>
            <div className="partners-container">
                <div className="partners-header">
                    <span>Popular Partners</span>
                    <h2>We Have <span>2563+</span> world wide clients</h2>
                </div>

                <div className="partners-body">
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
                            375: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            550:{
                              slidesPerView: 2,
                              spaceBetween: 30,
                            },
                            850: {
                              slidesPerView: 4,
                              spaceBetween: 40,
                            },
                            1200: {
                              slidesPerView: 5,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Autoplay,Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Partner image={company1} /></SwiperSlide>
                        <SwiperSlide><Partner image={company2} /></SwiperSlide>
                        <SwiperSlide><Partner image={company3} /></SwiperSlide>
                        <SwiperSlide><Partner image={company4} /></SwiperSlide>
                        <SwiperSlide><Partner image={company5} /></SwiperSlide>
                        <SwiperSlide><Partner image={company6} /></SwiperSlide>
                        <SwiperSlide><Partner image={company1} /></SwiperSlide>
                        <SwiperSlide><Partner image={company2} /></SwiperSlide>
                        <SwiperSlide><Partner image={company3} /></SwiperSlide>
                    </Swiper>

                </div>

            </div>
        </div>
    )
}

export default Partners