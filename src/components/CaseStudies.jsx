import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

import './CaseStudies.css'
// import caseStudy from '../casestudies.json'
import Case from './Case'

import project1 from '../assets/images/project-1.jpg'
import project2 from '../assets/images/project-2.jpg'
import project3 from '../assets/images/project-3.jpg'

import AOS from "aos";

const CaseStudies = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className='caseStudies-container'>


        <div className="caseStudies-head" data-aos="fade-down" data-aos-duration="2000">
          <span className='orange-span'>LATEST CASE STUDIES</span>
          <h2>OVER 15 YEARS, CUSTOMERS HAVE COME TO IT SOLUTIONS.</h2>
        </div>

        <div className="caseStudies-body">
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
              800: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><Case project_image={project1} project_button="PRODUCT DESIGN" project_title="STP Geospatial Engineers Helped Secure the Nation's Borders" project_body="Quis autem veleum sure reprehenderit quiine voluptate velit esse quam molestiae" project_details="CONTINUE READING" /></SwiperSlide>
            <SwiperSlide><Case project_image={project2} project_button="PRODUCT DESIGN" project_title="Deploying Experts from OtherS Projects to Fill Skill Gaps" project_body="Quis autem veleum sure reprehenderit quiine voluptate velit esse quam molestiae" project_details="CONTINUE READING" /></SwiperSlide>
            <SwiperSlide><Case project_image={project3} project_button="PRODUCT DESIGN" project_title="Providing Expertise to Keep Critical Systems Operational" project_body="Quis autem veleum sure reprehenderit quiine voluptate velit esse quam molestiae" project_details="CONTINUE READING" /></SwiperSlide>
            <SwiperSlide><Case project_image={project1} project_button="PRODUCT DESIGN" project_title="STP Geospatial Engineers Helped Secure the Nation's Borders" project_body="Quis autem veleum sure reprehenderit quiine voluptate velit esse quam molestiae" project_details="CONTINUE READING" /></SwiperSlide>
            <SwiperSlide><Case project_image={project2} project_button="PRODUCT DESIGN" project_title="Deploying Experts from OtherS Projects to Fill Skill Gaps" project_body="Quis autem veleum sure reprehenderit quiine voluptate velit esse quam molestiae" project_details="CONTINUE READING" /></SwiperSlide>
            <SwiperSlide><Case project_image={project3} project_button="PRODUCT DESIGN" project_title="Providing Expertise to Keep Critical Systems Operational" project_body="Quis autem veleum sure reprehenderit quiine voluptate velit esse quam molestiae" project_details="CONTINUE READING" /></SwiperSlide>

          </Swiper>

        </div>
      </div>
    </>
  )
}

export default CaseStudies