import React, { useEffect } from 'react'
import './BlogStandartElement.css'
import Button from './Button'
import WhiteButton from './WhiteButton'
import AOS from "aos";


const BlogStandardElement = ({blog_image,user_image}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className="blog-standart-element-container" data-aos="zoom-in" data-aos-duration="1500">
        <div className='blog-image'>
            <img src={blog_image} alt="" />
        </div>
        <div className='blog-user'>
            <img src={user_image} alt="" />
            <span>Washington</span>
        </div>
        <div className='blog-content'>
            <div className="bgs-meta">
                <span className='bg-calendar'>  <a href="">  25 November 2023</a></span>
                <span className='bg-comments'>  <a href="">  Comments (05)</a></span>
            </div>
            <h3 className='blog-detalis-h3'>Build Launch Powerful Responsives Websites With Editor Perfect</h3>
            <p className='home-p'>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut oditau</p>
            <WhiteButton buttonValue="Read More"/>
        </div>
    </div>
  )
}

export default BlogStandardElement