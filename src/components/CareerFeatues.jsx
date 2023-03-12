import React from 'react'
import './CareerFeatues.css'
import { SlBriefcase } from "react-icons/sl";
import { BiAtom } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";



const CareerFeatues = () => {
  return (
    <div className='career-features-container'>
        <div className='career-features-head'>
            <h2 className='capitalize-h2'>How We Hire</h2>
            <p className='gray-p'>Sed perspiciatis omnis natus voluptate accusantie doloremque laudantium <br /> totam rem aperiam eaque quaea</p>
        </div>

        <div className='career-features-body'>
            <div className="career-feature">
                <div className="career-feature-icon">
                    <SlBriefcase/>
                </div>
                <div className="career-feature-text">
                    <h3 className='black-h3'>Apply Jobs</h3>
                    <p className='gray-p'>Quis autem veleum iure reprehenderit quiinea volup tavelit esse quam nihe</p>
                </div>
            </div>

            <div className="career-feature">
                <div className="career-feature-icon">
                    <BiAtom/>
                </div>
                <div className="career-feature-text">
                    <h3 className='black-h3'>Interview</h3>
                    <p className='gray-p'>Quis autem veleum iure reprehenderit quiinea volup tavelit esse quam nihe</p>
                </div>
            </div>

            <div className="career-feature">
                <div className="career-feature-icon">
                    <AiOutlineBell/>
                </div>
                <div className="career-feature-text">
                    <h3 className='black-h3'>Notifications</h3>
                    <p className='gray-p'>Quis autem veleum iure reprehenderit quiinea volup tavelit esse quam nihe</p>
                </div>
            </div>

            <div className="career-feature">
                <div className="career-feature-icon">
                    <FaHeadphones/>
                </div>
                <div className="career-feature-text">
                    <h3 className='black-h3'>Contact</h3>
                    <p className='gray-p'>Quis autem veleum iure reprehenderit quiinea volup tavelit esse quam nihe</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CareerFeatues