import React, {useEffect} from 'react'
import gallery3 from '../assets/images/gallery-3.png'
import './HelpDeskDesigned.css'
import AOS from "aos";

const HelpDeskDesigned = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='help-desk-designed-container'>
            <div className='help-designed-image' data-aos="fade-right" data-aos-duration="1200"> 
                <img src={gallery3} alt="" />
            </div>
            <div className='help-designed-text'>
                <span className='blue-span'>Designed to boost</span>
                <h2 className='capitalize-h2 '>What Customers Think <br /> About Of HelpDesk</h2>

                <div className='help-designed-elements'>
                    <div className='help-designed-element' data-aos="fade-up" data-aos-duration="1000">
                        <h5>Tracking Made Easy</h5>
                        <p className='gray-p'>Sed ut perspiciatis unde oniste atus errorvo lutatem accusu dolore lauda</p>
                    </div>

                    <div className='help-designed-element' data-aos="fade-up" data-aos-duration="1500">
                        <h5>Support Portal Refelts Business</h5>
                        <p className='gray-p'>Sed ut perspiciatis unde oniste atus errorvo lutatem accusu dolore lauda</p>
                    </div>

                    <div className='help-designed-element' data-aos="fade-up" data-aos-duration="2000">
                        <h5>Collaborate Effectively</h5>
                        <p className='gray-p'>Sed ut perspiciatis unde oniste atus errorvo lutatem accusu dolore lauda</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpDeskDesigned