import React from 'react'
import './LProject.css'

const LProject = ({lp_img,lp_title}) => {
  return (
    <div className='latest-project-container'>
        <div className='lp-img'>
            <img src={lp_img} alt="" />
        </div>
        <div className="lp-text">
            <a href="">{lp_title}</a>
            <p>IT Consulting</p>
            <div className='lp-button'>
                <a href="">Read More</a>
            </div>
        </div>
    </div>
  )
}

export default LProject