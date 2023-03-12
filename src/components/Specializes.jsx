import React, { useEffect } from 'react'
import './Specializes.css'

import ProjectManagement from '../assets/images/project-management.png'
import SocialCare from '../assets/images/social-care.png'
import Puzzle from '../assets/images/puzzle.png'
import AOS from "aos";


const Specializes = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="3000" className='specializes-container'>
        <div className='specializes-head'>
            <p>GREAT JOURNEY FOR IT SOLUTIONS</p>
            <h2>SPECIALIZES IN BUILDING SERVICES</h2>
        </div>

        <div className='specializes-body'>
            <div className='specializes-element'>
                <div className='specializes-icon' >
                    <img src={ProjectManagement} alt="" />
                </div>
                <div className='specializes-text'>
                    <h3>Professional Service</h3>
                    <p>Sedut perspicias unde omnis natus error sit voluptatem accusanti remqu laudantium totam rem aperiam</p>
                </div>
            </div>

            <div className='specializes-element'>
                <div className='specializes-icon'>
                    <img src={SocialCare} alt="" />
                </div>
                <div className='specializes-text'>
                    <h3>Experience Team</h3>
                    <p>Sedut perspicias unde omnis natus error sit voluptatem accusanti remqu laudantium totam rem aperiam</p>
                </div>
            </div>

            <div className='specializes-element'>
                <div className='specializes-icon'>
                    <img src={Puzzle} alt="" />
                </div>
                <div className='specializes-text'>
                    <h3>Best IT Solutions</h3>
                    <p>Sedut perspicias unde omnis natus error sit voluptatem accusanti remqu laudantium totam rem aperiam</p>
                </div>
            </div>
        </div>
        
    </div>
    
    
    </>

  )
}


export default Specializes