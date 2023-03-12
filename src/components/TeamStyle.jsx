import React from 'react'
import './TeamStyle.css'
import Engineer from './Engineer'
import engineer7 from '../assets/images/img_7.jpg'
import engineer8 from '../assets/images/img_8.jpg'
import engineer9 from '../assets/images/img_9.jpg'
import engineer10 from '../assets/images/img_10.jpg'
import engineer11 from '../assets/images/img_11.jpg'
import engineer12 from '../assets/images/img_12.jpg'
import engineer13 from '../assets/images/img_13.jpg'
import engineer14 from '../assets/images/img_14.jpg'

const TeamStyle = () => {
    return (
        <div className='team-style-container'>
            <div className="first-four">
                <div>
                    <Engineer engineer_image={engineer7} engineer_name="James E. Villegas" engineer_level="Senior Engineer" />
                    <Engineer engineer_image={engineer8} engineer_name="Timothy B. Garcia" engineer_level="Senior Engineer" />
                </div>
                <div>
                    <Engineer engineer_image={engineer9} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer" />
                    <Engineer engineer_image={engineer10} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer" />
                </div>
            </div>
            <div className="last-four">
                <div>
                    <Engineer engineer_image={engineer11} engineer_name="James E. Villegas" engineer_level="Senior Engineer" />
                    <Engineer engineer_image={engineer12} engineer_name="Timothy B. Garcia" engineer_level="Senior Engineer" />
                </div>
                <div>
                    <Engineer engineer_image={engineer13} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer" />
                    <Engineer engineer_image={engineer14} engineer_name="Brian H. Rodriguez" engineer_level="Senior Engineer" />
                </div>
            </div>
        </div>
    )
}

export default TeamStyle