import React from 'react'
import './PagesHead.css'
import {Link} from 'react-router-dom'

const PagesHead = ({pages_name}) => {
  return (
    <div className='pages-head-container'>
        <h1>{pages_name}</h1>
        <ul className='pages-links'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li className='orange'>{pages_name}</li>
        </ul>
    </div>
  )
}

export default PagesHead