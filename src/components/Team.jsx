import React, { useEffect } from 'react'
import './Team.css'
import Engineer from './Engineer'
import engineer1 from '../assets/images/engineer-1.jpg'
import engineer2 from '../assets/images/engineer-2.jpg'
import engineer3 from '../assets/images/engineer-3.jpg'
import engineer4 from '../assets/images/engineer-4.jpg'
import engineer5 from '../assets/images/engineer-5.jpg'
import engineer6 from '../assets/images/engineer-6.jpg'

import notification from '../assets/images/notification.png'
import Button from './Button'

import AOS from "aos";

const Team = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='team-container'>
        <div className="team-head" data-aos="zoom-in" data-aos-duration="1000">
            <span className='orange-span'>Meet Our Team</span>
            <h2>LET’S TALK OUR PROFESSIONAL TEAM MEMBERS</h2>
        </div>
        <div className='team-body'>
            <div className="first-three">
                <Engineer engineer_image={engineer1} engineer_name="James E. Villegas" engineer_level="Senior Engineer"/>
                <Engineer engineer_image={engineer2} engineer_name="Timothy B. Garcia" engineer_level="Senior Engineer"/>
                <Engineer engineer_image={engineer3} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer"/>
            </div>
            <div className="last-three">
                <Engineer engineer_image={engineer4} engineer_name="James E. Villegas" engineer_level="Senior Engineer"/>
                <Engineer engineer_image={engineer5} engineer_name="Timothy B. Garcia" engineer_level="Senior Engineer"/>
                <Engineer engineer_image={engineer6} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer"/>
            </div>
        </div>
        <div className='team-footer'>
            <div className='tf-text'>
                <img src={notification}/>
                <h5>Become a Team Member With Our Company</h5>
            </div>

            <Button buttonDeyeri="Join With Us"/>
        </div>
    </div>
  )
}

export default Team