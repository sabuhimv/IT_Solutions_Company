import React, {useEffect} from 'react'
import './HelpDeskInto.css'
import HelpIntroElement from './HelpIntroElement'

import service from '../assets/images/customer-service.png'
import interactive from '../assets/images/interactive.png'
import search from '../assets/images/search.png'
import hours_24 from '../assets/images/24-hours.png'

import AOS from "aos";

const HelpDeskInto = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='help-intro-container'>
            <div className="help-intro-head" data-aos="fade-up" data-aos-duration="2000">
                <span className='blue-span'>Why choose us</span>
                <h2 className='capitalize-h2'>Omnichannel support experience <br /> enhanced, with Freshdesk!</h2>
            </div>

            <div className='help-intro-body'>
                <div className='help-intro-first'>
                    <HelpIntroElement help_element_icon={service} help_element_title="Support All Channels" />
                    <HelpIntroElement help_element_icon={interactive} help_element_title="Faster Resolution" />
                </div>

                <div className='help-intro-last'>
                    <HelpIntroElement help_element_icon={search} help_element_title="Context Touchpoint" />
                    <HelpIntroElement help_element_icon={hours_24} help_element_title="Omniroute Lifting" />
                </div>
            </div>
        </div>
    )
}

export default HelpDeskInto