import React from 'react'
import './WhiteButton.css'
const WhiteButton = ({buttonValue,white_button_path}) => {
  return (
    <a href={white_button_path} className="white-button">{buttonValue}</a>
  )
}

export default WhiteButton