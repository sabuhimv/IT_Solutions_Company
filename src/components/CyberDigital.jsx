import React from 'react'
import Button from './Button'
import './CyberDigital.css'
import CyberDigitalElement from './CyberDigitalElement'
import WhiteButton from './WhiteButton'

import cyber1 from '../assets/images/cyber-security-1.png'
import padlock from '../assets/images/padlock.png'
import protection from '../assets/images/protection.png'
import cyber2 from '../assets/images/cyber-security-2.png'

const CyberDigital = () => {
    return (
        <div className='cyber-digital-container'>
            <div className='cd-head'>
                <div className='cd-head-text'>
                    <span className='orange-bg-span'>Cyber Security</span>
                    <h2 className='capitalize-h2 text-underline'>Digital Innovative Solutions For Cyber <br />Security</h2>
                </div>

                <div className='cd-head-button'>
                    <WhiteButton buttonValue={"view more services"} />
                </div>
            </div>

            <div className='cd-body'>
                <div className='cd-first'>
                    <CyberDigitalElement cyber_img={cyber1} cyber_title="Information Security Governance"/>
                    <CyberDigitalElement cyber_img={padlock} cyber_title="Defense and Forensics Cyber Analyst"/>
                </div>
                <div className='cd-last'>
                    <CyberDigitalElement cyber_img={protection} cyber_title="Information Security Development"/>
                    <CyberDigitalElement cyber_img={cyber2} cyber_title="Reliable Multi - function Technology"/>
                </div>
            </div>
        </div>
    )
}

export default CyberDigital