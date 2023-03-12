import React, { useEffect } from 'react'
import './Blog.css'
import Button from './Button'
import WhiteButton from './WhiteButton'
import AOS from "aos";


const Blog = ({blog_image,user_image}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className="blog-container" data-aos="zoom-in" data-aos-duration="1500">
        <div className='blog-image'>
            <img src={blog_image} alt="" />
        </div>
        <div className='blog-user'>
            <img src={user_image} alt="" />
            <span>Washington</span>
        </div>
        <div className='blog-content'>
            <div className="bg-meta">
                <span className='bg-calendar'>  <a href="">  25 November 2023</a></span>
                <span className='bg-comments'>  <a href="">  Comments (05)</a></span>
            </div>
            <h3>Build Launch Powerful Responsives Websites With Editor Perfect</h3>
            <p className='home-p'>Sed ut perspiciatis unde omnsiste natus errors voluptatem accusantium doloremque laudatium totae rem aperiam eaque quae abillo</p>
            <WhiteButton buttonValue="Read More" white_button_path={'/blog-details'}/>
        </div>
    </div>
  )
}

export default Blog