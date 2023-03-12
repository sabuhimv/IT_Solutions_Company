import React from 'react'
import './AboutUsTeam.css'
import Engineer from './Engineer'
import engineer7 from '../assets/images/img_7.jpg'
import engineer8 from '../assets/images/img_8.jpg'
import engineer9 from '../assets/images/img_9.jpg'
import engineer10 from '../assets/images/img_10.jpg'
import engineer11 from '../assets/images/img_11.jpg'
import engineer12 from '../assets/images/img_12.jpg'
import engineer13 from '../assets/images/img_13.jpg'
import engineer14 from '../assets/images/img_14.jpg'
import Button from './Button'

const AboutUsTeam = () => {
    return (
        <div className='about-us-partners-container'>
            <div className='about-team-text'>
                <div className="about-team-left">
                    <span className='orange-bg-span'>Team Member</span>
                    <h2 className='text-underline capitalize-h2'>Meet Our Professionals Team Member</h2>
                </div>

                <Button buttonDeyeri={"Meet Our Team"}/>
            </div>

            <div className="about-team-members">
                <Engineer engineer_image={engineer7} engineer_name="James E. Villegas" engineer_level="Senior Engineer" />
                <Engineer engineer_image={engineer8} engineer_name="Timothy B. Garcia" engineer_level="Senior Engineer" />
                <Engineer engineer_image={engineer9} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer" />
                <Engineer engineer_image={engineer10} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer" />
                <Engineer engineer_image={engineer11} engineer_name="James E. Villegas" engineer_level="Senior Engineer" />
                <Engineer engineer_image={engineer12} engineer_name="Timothy B. Garcia" engineer_level="Senior Engineer" />
                <Engineer engineer_image={engineer13} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer" />
                <Engineer engineer_image={engineer14} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer" />
            </div>

        </div>
    )
}

export default AboutUsTeam