import React, { useEffect } from 'react'
import history_img from '../assets/images/history-img-1.jpg'
import './AboutUsHistory.css'

import AOS from "aos";

const AboutUsHistory = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='about-us-history-container'>
        <div className='about-history-image'>
            <img src={history_img} alt="" />
        </div>
        <div className='about-history-content'>
            <div className="history-content-box">
                <h3>20 January 1995</h3>
                <span>When We Start Our Journery</span>
            </div>

            <div className="history-content-body">
                <span>Complete Guide Accessible Front Floating Labels Lighthouse</span>
                <p className='gray-p' data-aos="zoom-in" data-aos-duration="1000">Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquep saquae abillo inventore veritatis et quasi architecto beataey vitae dicta sunt explicabe enim ipsam voluptatem quiase voluptas sit aspernatur autodit aut fugit</p>
                <p className='gray-p' data-aos="zoom-in" data-aos-duration="1500">Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquep saquae abillo inventore veritatis et quasi architecto beataey vitae dicta sunt explicabe enim ipsam voluptatem quiase voluptas sit aspernatur autodit aut fugit</p>
                <p className='gray-p' data-aos="zoom-in" data-aos-duration="2000">Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquep saquae abillo inventore veritatis et quasi architecto beataey vitae dicta sunt explicabe enim ipsam voluptatem quiase voluptas sit aspernatur autodit aut fugit</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUsHistory