import React from 'react'
import './WhyUsComponent.css'

export const WhyUsComponent = ({wu_img,w_title}) => {
  return (
    <div className='why-us-component'>
        <div className='wu-left'>
            <img src={wu_img} alt="" />
        </div>
        <div className='wu-right'>
            <h3>{w_title}</h3>
            <p>Sed perspiciatis unde omniste natus voluptate accusantiuy doloremque laudantium</p>
        </div>
    </div>
  )
}
