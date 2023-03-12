import React, { useEffect } from 'react'
import './BlogDetailsComments.css'
import avatar1 from '../assets/images/comment-avatar-1.jpg'
import avatar2 from '../assets/images/comment-avatar-2.jpg'
import avatar3 from '../assets/images/comment-avatar-3.jpg'
import {Link} from 'react-router-dom'
import AOS from "aos";

const BlogDetailsComments = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='popular-comments'>
            <h4 className='capitalize-h4'>Popular Comments (5)</h4>
            <p className='gray-p'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>

            <div className='blog-comment' data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="comment-avatar">
                    <img src={avatar1} alt="" />
                </div>
                <div className="comment-content">
                    <span className='author-name'>Randal L. Tomas <span className='comment-date'>25 november 2023</span> </span>
                    <p className='gray-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <a href="" className='reply'>Reply</a>
                </div>
            </div>

            <div className='blog-comment' data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="comment-avatar">
                    <img src={avatar2} alt="" />
                </div>
                <div className="comment-content">
                    <span className='author-name'>Randal L. Tomas <span className='comment-date'>25 november 2023</span> </span>
                    <p className='gray-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <a href="" className='reply'>Reply</a>
                </div>
            </div>

            <div className='blog-comment' data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="comment-avatar">
                    <img src={avatar3} alt="" />
                </div>
                <div className="comment-content">
                    <span className='author-name'>Randal L. Tomas <span className='comment-date'>25 november 2023</span> </span>
                    <p className='gray-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <a href="" className='reply'>Reply</a>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsComments