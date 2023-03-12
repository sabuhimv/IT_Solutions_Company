import React , {useEffect} from 'react'
import BlueButton from './BlueButton'
import './HelpSupport.css'
import { BsPlay } from "react-icons/bs";
import help_support from '../assets/images/hero-4_img-1.png'
import shape_icon_1 from '../assets/images/icon-16.png'
import shape_icon_2 from '../assets/images/icon-15.png'
import AOS from "aos";

const HelpSupport = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='help-support'>
      <div className='help-shape-icon-1'>
        <img src={shape_icon_1} alt="" />
      </div>

      <div className='help-support-container'>

        <div className='help-support-text'  data-aos="fade-right" data-aos-duration="1500">
          <span className='blue-span'>Support across all channels</span>
          <h1 className='capitalize-h1'>Choose The Best Support Ticketing</h1>
          <p className='gray-p'>Sed perspiciatis unde omnis natus voluptate accusantiuy doloreue laudantium totam rem aperiam eaque quae aitore veritatis quasi architecto beatae vitae</p>
          <div className='help-support-button-group'>
            <BlueButton blueButtonValue={"Get Started"} />

            <a href="https://www.youtube.com/watch?v=vTm7t9JBGfM&t=39s">
              <div className='help-support-icon'>
                <BsPlay />
              </div>
              <span className='help-support-span'>How it works</span>
            </a>
          </div>
        </div>

        <div className='help-support-image'  data-aos="fade-left" data-aos-duration="2000">
          <img src={help_support} alt="" />
        </div>

      </div>

      <div className='help-shape-icon-2'>
        <img src={shape_icon_2} alt="" />
      </div>
    </div>

  )
}

export default HelpSupport