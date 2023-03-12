import React, { useEffect } from 'react'
import './BlogStandartArea.css'
import BlogStandartElement from './BlogStandartElement'
import blog1 from '../assets/images/blog-standard-1.jpg'

import user1 from '../assets/images/user-1.jpg'
import Blog from './Blog'

import postthumb1 from '../assets/images/post-thumb-1.jpg'
import postthumb2 from '../assets/images/post-thumb-2.jpg'
import postthumb3 from '../assets/images/post-thumb-3.jpg'
import postthumb4 from '../assets/images/post-thumb-4.jpg'

import banner1 from '../assets/images/banner-1.jpg'

import { BiSearch } from "react-icons/bi";
import Button from './Button'

import AOS from "aos";

const BlogStandartArea = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='blog-standart-area-container'>
            <div className="blog-standart-area-left">
                <BlogStandartElement blog_image={blog1} user_image={user1} className="blog-standart-element" />
                <BlogStandartElement blog_image={blog1} user_image={user1} className="blog-standart-element" />
            </div>

            <div className="blog-standart-area-right">


                <div className="widget widget-search widget-m0" data-aos="fade-left" data-aos-duration="1000">
                    <h4 className='widget-title capitalize-h4 '>Search
                        <span className='blog-standart-line'></span>
                    </h4>
                    <form>
                        <div className='blog-form-group'>
                            <input type="email" className='blog-form-control' placeholder='Search Here' name='email' />
                            <BiSearch className='blog-form-search-icon' />
                        </div>
                    </form>
                </div>

                <div className='widget' data-aos="fade-left" data-aos-duration="1500">
                    <h4 className='widget-title capitalize-h4 '>Recent News
                        <span className='blog-standart-line'></span>
                    </h4>

                    <div className='recent-post-widget'>
                        <div className='recent-post'>
                            <div className="recent-post-image">
                                <img src={postthumb1} alt="" />
                            </div>
                            <div className="recent-post-text">
                                <h6><a href="">Bake Layers Accesilitye Testing Supporte</a></h6>
                                <span className='bg-calendar'>  <a href="">  25 November 2023</a></span>
                            </div>
                        </div>
                    </div>
                    <div className='recent-post-widget'>
                        <div className='recent-post'>
                            <div className="recent-post-image">
                                <img src={postthumb2} alt="" />
                            </div>
                            <div className="recent-post-text">
                                <h6><a href="">Bake Layers Accesilitye Testing Supporte</a></h6>
                                <span className='bg-calendar'>  <a href="">  25 November 2023</a></span>
                            </div>
                        </div>
                    </div>
                    <div className='recent-post-widget'>
                        <div className='recent-post'>
                            <div className="recent-post-image">
                                <img src={postthumb3} alt="" />
                            </div>
                            <div className="recent-post-text">
                                <h6><a href="">Bake Layers Accesilitye Testing Supporte</a></h6>
                                <span className='bg-calendar'>  <a href="">  25 November 2023</a></span>
                            </div>
                        </div>
                    </div>
                    <div className='recent-post-widget'>
                        <div className='recent-post'>
                            <div className="recent-post-image">
                                <img src={postthumb4} alt="" />
                            </div>
                            <div className="recent-post-text">
                                <h6><a href="">Bake Layers Accesilitye Testing Supporte</a></h6>
                                <span className='bg-calendar'>  <a href="">  25 November 2023</a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget widget-banner" data-aos="fade-left" data-aos-duration="1500">
                    <h3>Ready To Get Expert Our IT Services</h3>
                    <Button buttonDeyeri={"Contact Us"} />
                </div>

                <div className="widget widget-tag-cloud" data-aos="fade-left" data-aos-duration="2000">
                    <h4 className='widget-title capitalize-h4 '>Best Tags
                        <span className='blog-standart-line'></span>
                    </h4>

                    <div className='widget-tag-links'>
                        <a href="#">Technology</a>
                        <a href="#">service</a>
                        <a href="#">team</a>
                        <a href="#">solutions</a>
                        <a href="#">consultancy</a>
                        <a href="#">It Company</a>
                        <a href="#">agency</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BlogStandartArea