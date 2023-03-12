import React,{useEffect} from 'react'
import './HelpDeskAnalytics.css'
import gallery6 from '../assets/images/gallery-6.jpg' 
import meeting from '../assets/images/meeting.png'
import online_chat from '../assets/images/online-chat.png'
import AOS from "aos";

const HelpDeskAnalytics = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
            <div className='help-analytics-container'>
                <div className='help-analytics-image' data-aos="fade-down-left" data-aos-duration="1500">
                    <img src={gallery6} alt="" />
                </div>
                <div className='help-analytics-text' data-aos="fade-down-right" data-aos-duration="1500">
                    <span className='blue-span'>WHAT YOU CAN WE DO</span>
                    <h2 className='capitalize-h2'>Manage Your Email & Data Communication Tasks</h2>

                    <div className='help-analytics-element'>
                        <div className='help-analytics-element-icon'>
                            <img src={online_chat} alt="" />
                        </div>
                        <div className='help-analytics-element-text'>
                            <h5 className='black-h5'>Automate Repetitive Tasks</h5>
                            <p className="gray-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudan totam rem aperiam, eaque <br /> ipsa quae abillo</p>
                        </div>
                    </div>

                    <div className='help-analytics-element'>
                        <div className='help-analytics-element-icon'>
                            <img src={meeting} alt="" />
                        </div>
                        <div className='help-analytics-element-text'>
                            <h5 className='black-h5'>Customize Your Address & Dashboard</h5>
                            <p className="gray-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudan totam rem aperiam, eaque <br />  ipsa quae abillo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpDeskAnalytics