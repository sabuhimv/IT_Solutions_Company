import React from 'react'
import './BestFeatures.css'
import best_img from '../assets/images/gallery-1.jpg'
import research_and_development from '../assets/images/research-and-development.png'
import iso from '../assets/images/iso.png'
import web_design from '../assets/images/web-design.png'

const BestFeatures = () => {
  return (
    <div className='best-features-container'>
        <div className="best-left">
            <img src={best_img} alt="" />
        </div>
        <div className="best-right">
            <span>WHY CHOOSE US</span>
            <h2 className='text-underline'>We Offer Best Features For Software Solutions</h2>
            <div className='best-block'>
                <div className='best-block-icon'>
                    <img src={research_and_development} alt="" />
                </div>
                <div className='best-block-text'>
                    <h4>Trusted Solutions Agency</h4>
                    <p>Sed perspiciatis unde omnis voluptate accusantie doloremque laudantium totam rem aperiam</p>
                </div>
            </div>
            <div className='best-block'>
                <div className='best-block-icon'>
                    <img src={iso} alt="" />
                </div>
                <div className='best-block-text'>
                    <h4>ISO Certified Company</h4>
                    <p>Sed perspiciatis unde omnis voluptate accusantie doloremque laudantium totam rem aperiam</p>
                </div>
            </div>
            <div className='best-block'>
                <div className='best-block-icon'>
                    <img src={web_design} alt="" />
                </div>
                <div className='best-block-text'>
                    <h4>Product Marketing Strategy</h4>
                    <p>Sed perspiciatis unde omnis voluptate accusantie doloremque laudantium totam rem aperiam</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestFeatures