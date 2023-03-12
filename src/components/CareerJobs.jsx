import React from 'react'
import CareerJob from './CareerJob'
import Button from './Button.jsx'
import './CareerJobs.css'

import c1 from '../assets/images/c-1.png'
import c2 from '../assets/images/c-2.png'
import c3 from '../assets/images/c-3.png'
import c4 from '../assets/images/c-4.png'
import c5 from '../assets/images/c-5.png'
import c6 from '../assets/images/c-6.png'
import c7 from '../assets/images/c-7.png'
import c8 from '../assets/images/c-8.png'


const CareerJobs = () => {
  return (
    <div className='career-jobs-container'>
        <div className="career-jobs-head">
            <h2 className='capitalize-h2'>What Jobs We Are Hiring</h2>
            <p className='gray-p'>Sed perspiciatis omnis natus voluptate accusantie doloremque laudantium <br /> totam rem aperiam eaque quaea</p>
        </div>
        <div className="career-jobs-body">
            <CareerJob career_job_img={c1}/>
            <CareerJob career_job_img={c2}/>
            <CareerJob career_job_img={c3}/>
            <CareerJob career_job_img={c4}/>
            <CareerJob career_job_img={c5}/>
            <CareerJob career_job_img={c6}/>
            <CareerJob career_job_img={c7}/>
            <CareerJob career_job_img={c8}/>
        </div>

        <Button buttonDeyeri="View All Jobs"/>
    </div>
  )
}

export default CareerJobs