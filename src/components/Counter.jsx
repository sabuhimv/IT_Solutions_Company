import React from 'react'
import './Counter.css'
import CountUp from 'react-countup';
import CountElement from './CountElement';

import contract from '../assets/images/contract.png'
import review from '../assets/images/review.png'
import dashboard from '../assets/images/dashboard.png'
import award from '../assets/images/award.png'

const Counter = () => {
  
  return (
    <div className='counter-container'>
        <div className='counter-top'>
          <CountElement count_image={contract} count_amount="25630" count_title="Happy Customer" />
          <CountElement count_image={review}  count_amount="75646" count_title="Star Work Reviews"/>
        </div>

        <div className='counter-bottom'>
          <CountElement count_image={dashboard}  count_amount="89634" count_title="Project Complate"/>
          <CountElement count_image={award}  count_amount="96325" count_title="Win Of Awards"/>
        </div>
    </div>
  )
}

export default Counter