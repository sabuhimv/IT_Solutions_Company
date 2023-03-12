import React from 'react'
import './CyberCounter.css'

import contract from '../assets/images/contract.png'
import review from '../assets/images/review.png'
import dashboard from '../assets/images/dashboard.png'
import award from '../assets/images/award.png'
import CyberCountElement from './CyberCountElement'

const CyberCounter = () => {
  return (
    <div className='cyber-counter-container'>
        <div className='counter-top'>
          <CyberCountElement count_image={contract} count_amount="25630" count_title="Happy Customer" />
          <CyberCountElement count_image={review}  count_amount="75646" count_title="Star Work Reviews"/>
        </div>

        <div className='counter-bottom'>
          <CyberCountElement count_image={dashboard}  count_amount="89634" count_title="Project Complate"/>
          <CyberCountElement count_image={award}  count_amount="96325" count_title="Win Of Awards"/>
        </div>
    </div>
  )
}

export default CyberCounter