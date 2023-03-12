import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import './ProductDesign.css'
import Case from './Case'

import project9 from '../assets/images/project-9.jpg'
import project10 from '../assets/images/project-10.jpg'
import project11 from '../assets/images/project-11.jpg'
import project12 from '../assets/images/project-12.jpg'

const ProductDesign = () => {
  return (
    <div className="product-design-container">
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
              955: {
                slidesPerView: 2,
                spaceBetween: 60,
              },
              1360: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide><Case project_image={project9} project_button="PRODUCT DESIGN" project_title="STP Geospatial Engineers Helped Secure the Nation's Borders"   /></SwiperSlide>
            <SwiperSlide><Case project_image={project10} project_button="PRODUCT DESIGN" project_title="Deploying Experts from OtherS Projects to Fill Skill Gaps"   /></SwiperSlide>
            <SwiperSlide><Case project_image={project11} project_button="PRODUCT DESIGN" project_title="Providing Expertise to Keep Critical Systems Operational"   /></SwiperSlide>
            <SwiperSlide><Case project_image={project12} project_button="PRODUCT DESIGN" project_title="STP Geospatial Engineers Helped Secure the Nation's Borders"    /></SwiperSlide>
            <SwiperSlide><Case project_image={project9} project_button="PRODUCT DESIGN" project_title="STP Geospatial Engineers Helped Secure the Nation's Borders"    /></SwiperSlide>
            <SwiperSlide><Case project_image={project10} project_button="PRODUCT DESIGN" project_title="Deploying Experts from OtherS Projects to Fill Skill Gaps"   /></SwiperSlide>
            <SwiperSlide><Case project_image={project11} project_button="PRODUCT DESIGN" project_title="Providing Expertise to Keep Critical Systems Operational"   /></SwiperSlide>
            <SwiperSlide><Case project_image={project12} project_button="PRODUCT DESIGN" project_title="STP Geospatial Engineers Helped Secure the Nation's Borders"   /></SwiperSlide>
          </Swiper>
    </div>
  )
}

export default ProductDesign