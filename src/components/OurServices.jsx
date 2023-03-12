import React from 'react'
import './OurServices.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import product from '../assets/images/new-product.png'
import target from '../assets/images/target.png'
import cyper_security from '../assets/images/cyber-security.png'
import booking from '../assets/images/booking.png'
import web_design from '../assets/images/web-design.png'


import { Autoplay } from "swiper";

const OurServices = () => {
  return (
    <div className='our-service-container'>
      <span className='orange-bg-span'>Our Services</span>
      <h2 className='home-h2'>Innovative Solutions For Software Development</h2>
      <div className='our-service-swiper'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          // modules={[Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}

          className="mySwiper"
        >
          <SwiperSlide>
            <div className="service-component product-component">
              <div className="sc-icon product-icon">
                <img src={product} alt="" />
              </div>
              <div className="sc-text">
                <a href="">Product Strategy</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component target-component">
              <div className="sc-icon target-icon">
                <img src={target} alt="" />
              </div>
              <div className="sc-text">
                <a href="">QA & Tasting</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component cyper-component">
              <div className="sc-icon cyper-icon">
                <img src={cyper_security} alt="" />
              </div>
              <div className="sc-text">
                <a href="">Cyber Security</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component booking-component">
              <div className="sc-icon booking-icon">
                <img src={booking} alt="" />
              </div>
              <div className="sc-text">
                <a href="">Mobile Apps</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component web-component">
              <div className="sc-icon web-icon">
                <img src={web_design} alt="" />
              </div>
              <div className="sc-text">
                <a href="">Web Design</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component product-component">
              <div className="sc-icon product-icon">
                <img src={product} alt="" />
              </div>
              <div className="sc-text">
                <a href="">Product Strategy</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component target-component">
              <div className="sc-icon target-icon">
                <img src={target} alt="" />
              </div>
              <div className="sc-text">
                <a href="">QA & Tasting</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component cyper-component">
              <div className="sc-icon cyper-icon">
                <img src={cyper_security} alt="" />
              </div>
              <div className="sc-text">
                <a href="">Cyber Security</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component booking-component">
              <div className="sc-icon booking-icon">
                <img src={booking} alt="" />
              </div>
              <div className="sc-text">
                <a href="">Mobile Apps</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-component web-component">
              <div className="sc-icon web-icon">
                <img src={web_design} alt="" />
              </div>
              <div className="sc-text">
                <a href="">Web Design</a>
                <p className='gray-p'>Sed perspiatis unde omna volu tate</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  )
}

export default OurServices