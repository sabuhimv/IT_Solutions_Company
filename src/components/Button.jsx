import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const Button = ({buttonDeyeri,button_path}) => {
  return (
        <Link to={button_path} className="orange-button">{buttonDeyeri}</Link>
    )
}

export default Button