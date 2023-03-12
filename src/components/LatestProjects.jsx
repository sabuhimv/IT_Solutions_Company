import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import project4 from '../assets/images/project-4.jpg'
import project5 from '../assets/images/project-5.jpg'
import project6 from '../assets/images/project-6.jpg'
import project7 from '../assets/images/project-7.jpg'

import './LatestProjects.css'
import LProject from "./LProject";

import { Autoplay, Navigation } from "swiper";

const LatestProjects = () => {
    return (
        <div className='latest-projects-container'>
            <div className="latest-projects-head">
                <span className='orange-span'>LATEST PROJECTS</span>
                <h2 className='home-h2'>We’ve Successfully 256+ <br /> Project Complate</h2>
            </div>
            <div className="latest-projects-body">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        700: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1018: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1350: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide><LProject lp_img={project4} lp_title="Project Management"/></SwiperSlide>
                    <SwiperSlide><LProject lp_img={project5} lp_title="Product Strategy"/></SwiperSlide>
                    <SwiperSlide><LProject lp_img={project6} lp_title="Support Engineering"/></SwiperSlide>
                    <SwiperSlide><LProject lp_img={project7} lp_title="Marketing Strategy"/></SwiperSlide>
                    <SwiperSlide><LProject lp_img={project4} lp_title="Web Development"/></SwiperSlide>
                    <SwiperSlide><LProject lp_img={project5} lp_title="Product Strategy"/></SwiperSlide>
                    <SwiperSlide><LProject lp_img={project6} lp_title="Support Engineering"/></SwiperSlide>
                    <SwiperSlide><LProject lp_img={project7} lp_title="Marketing Strategy"/></SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default LatestProjects