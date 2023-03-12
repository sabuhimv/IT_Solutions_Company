import React from 'react'
import BlueButton from '../components/BlueButton'
import BlueNavbar from '../components/BlueNavbar'
import PagesHead from '../components/PagesHead'
import './NotFoundPage.css'
import {Link} from 'react-router-dom'
import img_404 from '../assets/images/404.png'

const NotFoundPage = () => {
  return (
    <>
    <PagesHead pages_name={"404 Page"}/>
    <div className="opps">
      <div className='404-image'>
        <img src={img_404} alt="" />
      </div>
      <h2>OPPS! This Page is Not Found</h2>
      <p className='gray-p'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quame molestiae consequatur veillum dolorem eum fugiate</p>

      <Link to="/">GO TO HOME</Link>
    </div>
    </>
  )
}

export default NotFoundPage