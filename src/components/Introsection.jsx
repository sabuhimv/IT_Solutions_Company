import React from 'react'
import './Introsection.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Button from './Button';
import WhiteButton from './WhiteButton';

// import { Pagination } from "swiper";

const Introsection = () => {
  return (
    <div className='introsection-container'>
        <span className='white-span'>Professional it solutions</span>
        <h1>Architecting, developing<br /> and deploying  enterprise<br /> IT solutions</h1>

        <div className="intro-button-group">
            <Button buttonDeyeri="Get Started now" button_path={'./about'}/>
            <WhiteButton buttonValue="Explore more" white_button_path={'./career'}/>
        </div>
        {/* <Swiper
        direction={"vertical"}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper vertical-swiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </div>
  )
}

export default Introsection