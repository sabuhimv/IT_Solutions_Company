import React from 'react'
import './LatestComponent.css'

const LatestComponent = ({latest_img,latest_title}) => {
  return (
    <div className='latest-component'>
        <div className='lc-left'>
            <img src={latest_img} alt="" />
        </div>
        <div className='lc-right'>
            <h3>{latest_title}</h3>
            <p>But I must explain to you how all this mistaken ideofe denouncing pleasure</p>
        </div>

    </div>
  )
}

export default LatestComponent