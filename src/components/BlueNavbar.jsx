import React from 'react'
import './Navbar.css'
import BlueLogo from '../assets/images/logo-5.png'
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import BlueButton from './BlueButton';

import { RiArrowDropDownLine } from "react-icons/ri";
import { ImSearch } from "react-icons/im";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";


const BlueNavbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <img src={BlueLogo} alt="Site Logo" />
                </div>

                <div className='nav-links'>
                    <ul className='nav-menu'>
                        <li className='nav-item'><a href="">Home</a></li>
                        <li className='nav-item'><a href="">About</a></li>
                        <li className='nav-item'><a href="">Services</a></li>
                        <li className='nav-item'><a href="">Cases</a></li>
                        <li className='nav-item'><a href="">Blog</a></li>
                        <li className='nav-item'><a href="">Pages</a></li>
                        <li className='nav-item'><a href="">Contact</a></li>
                        <li><ImSearch /></li>
                    </ul>


                    <ul className='home-dropdown'>
                        <li><a href="">IT COMPANY</a></li>
                        <li><a href="">IT AGENCY</a></li>
                        <li><a href="">IT AGENCY</a></li>
                        <li><a href="">IT AGENCY</a></li>
                        <li><a href="">IT AGENCY</a></li>
                        <li><a href="">IT AGENCY</a></li>
                        <li><a href="">IT AGENCY</a></li>
                    </ul>

                </div>

                <div className='quote'>
                    <div>
                        <BsFillBasket2Fill className='nav-basket' />
                        <span className='basket-span'>|</span>
                    </div>

                    <div>
                        <MdLanguage className='language' />
                        <span>English</span>
                        <RiArrowDropDownLine />
                    </div>
                    <div className='nav-button'>
                        <BlueButton blueButtonValue="GET FREE QUOTE" />
                    </div>

                    <div className='nav-bars'>
                        <FaBars />
                    </div>

                </div>


            </nav>

        </>
    )
}

export default BlueNavbar