import React, { useEffect } from 'react'
import './Solutions.css'
import Solution from './Solution'
import solution1 from '../assets/images/icon-1.png'
import solution2 from '../assets/images/icon-2.png'
import solution3 from '../assets/images/icon-3.png'
import solution4 from '../assets/images/icon-4.png'
import AOS from "aos";

const Solutions = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='solutions-container'>
        <div data-aos="fade-down" data-aos-duration="2000" className="solutions-head">
            <span>WHAT WE DO</span>
            <h2>SOLUTIONS CUSTOMERS HAVE <br /> BUILT WITH INSTABASE</h2>
        </div>
        
        <div className="solutions-body">
            <Solution icon={solution1}/>
            <Solution icon={solution2}/>
            <Solution icon={solution3}/>
            <Solution icon={solution4}/>
        </div>

    </div>
  )
}

export default Solutions