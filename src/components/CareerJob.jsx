import React from 'react'
import './CareerJob.css'
const CareerJob = ({career_job_img}) => {
  return (
    <div className='career-job-container'>
        <div>
            <img src={career_job_img} alt="" />
        </div>
        <a href="" className='career-job-title'>Senior Design</a>
        <span className="salary">$250 - 859/ monthly</span>
        <p className='gray-p'>Quis autem veleum reprehe nderit quin voluptate</p>

        <a href="" className='career-job-button'>apply now</a>
    </div>
  )
}

export default CareerJob