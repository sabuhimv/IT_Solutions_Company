import React from 'react'
import './Case.css'
import Button from './Button'

const Case = ({ project_image, project_button, project_title, project_body, project_details }) => {
  return (
    <div className='case-container'>
      <div className='case-img'>
        <img src={project_image} alt="" />
      </div>
      <div className="case-button">
        <Button buttonDeyeri={project_button} />
      </div>
      <a className='project_title' href="">{project_title}</a>
      <p className='project_body'>{project_body}</p>
      <a className='project_details' href="">{project_details}</a>
    </div>

  )
}

export default Case