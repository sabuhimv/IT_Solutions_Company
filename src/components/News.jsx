import React, { useEffect } from 'react'
import Blog from './Blog'
import './News.css'
import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'

import user1 from '../assets/images/user-1.jpg'
import user2 from '../assets/images/user-2.jpg'
import user3 from '../assets/images/user-3.jpg'

import AOS from "aos";

const News = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="news-container">
        <div className="news-head" data-aos="fade-down" data-aos-duration="2000">
            <span className='orange-span'>Lastest news & Blog</span>
            <h2 className='home-h2'>Get every single update <br /> article & tipes</h2>
        </div>
        <div className="news-body">
            <Blog blog_image={blog1} user_image={user1}/>
            <Blog blog_image={blog2} user_image={user2}/>
            <Blog blog_image={blog3} user_image={user3}/>
        </div>
    </div>
  )
}

export default News