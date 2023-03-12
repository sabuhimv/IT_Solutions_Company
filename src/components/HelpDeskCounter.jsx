import React from 'react'
import HelpDeskCountElement from './HelpDeskCountElement'
import './HelpDeskCounter.css'
import contract from '../assets/images/contract.png'
import review from '../assets/images/review.png'
import dashboard from '../assets/images/dashboard.png'
import award from '../assets/images/award.png'
import shape1 from '../assets/images/shape-3.png'
import shape4 from '../assets/images/shape-4.png'

const HelpDeskCounter = () => {
  return (
    <div className='help-counter-container'>
        <div className='help-icon'>
            <span>
                <img src={shape1} alt="" />
            </span>
        </div>
        <div className='counter-top'>
          <HelpDeskCountElement count_image={contract} count_amount="25630" count_title="Happy Customer" />
          <HelpDeskCountElement count_image={review}  count_amount="75646" count_title="Star Work Reviews"/>
        </div>

        <div className='counter-bottom'>
          <HelpDeskCountElement count_image={dashboard}  count_amount="89634" count_title="Project Complate"/>
          <HelpDeskCountElement count_image={award}  count_amount="96325" count_title="Win Of Awards"/>
        </div>

        <div className='help-icon-two'>
            <span>
                <img src={shape4} alt="" />
            </span>
        </div>
    </div>
  )
}

export default HelpDeskCounter