import React, { useEffect } from 'react'
import './About.css'
import AboutUs from '../assets/images/about-1.jpg'
import Button from './Button'
import AOS from "aos";


const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
        <div className='about-container'>
            <div data-aos="fade-right" data-aos-duration="2000" className="about-left">
                <img src={AboutUs} alt="" />
            </div>

            <div className="about-right" data-aos="fade-left" data-aos-duration="2000">
                <span className='orange-span'>WHO WE ARE</span>
                <h2>The Enterprise Productivity Platform For Complex Data</h2>
                <p>Sed perspiciatis unde omnis iste natus voluptate accusantiuy doloremque laudantium totam rem aperiam eaque quae ainvtore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos ratione volupta seque nesciunt porro quisquam doloremdolor site</p>
            
                <Button buttonDeyeri="LEARN MORE US" button_path={'./about'}/>

            </div>

        </div>
    </>
  )
}

export default About