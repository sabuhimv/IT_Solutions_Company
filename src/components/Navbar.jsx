import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import Logo from '../assets/images/logo-1.png'
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import Button from './Button.jsx'
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImSearch } from "react-icons/im";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { leftNavItems, navItems, leftHomeDropdown, leftAboutDropdown, leftServicesDropdown, leftBlogDropdown } from './NavItems.jsx'

import Dropdown from './Dropdown';
import drop from '../assets/images/down-arrow.png'
import HomeDropdown from './HomeDropdown';
import AboutDropdown from './AboutDropdown';
import BlogDropdown from './BlogDropdown';

import { MdArrowDropDown } from "react-icons/md";

import { FaTimes } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import AOS from "aos";

const Navbar = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const leftNavRef = useRef()


    function openLeftNav(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('nav-bars')) {
            leftNavRef.current.classList.add("left-navbar-active")
        }
    }

    function closeLeftNav(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('nav-cross-icon')) {
            leftNavRef.current.classList.remove("left-navbar-active")
        }
    }


    const homeLinkRef = useRef()

    function openHomeLinks(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('nav-drop')) {
            homeLinkRef.current.classList.add("home-links-active")
        }
    }
    function closeHomeLinks(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('left-link-x')) {
            homeLinkRef.current.classList.remove("home-links-active")
        }
    }


    const aboutLinkRef = useRef()

    function openAboutLinks(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('nav-drop-about')) {
            aboutLinkRef.current.classList.add("about-links-active")
        }
    }
    function closeAboutLinks(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('left-link-about-x')) {
            aboutLinkRef.current.classList.remove("about-links-active")
        }
    }


    const servicesLinkRef = useRef()

    function openServicesLinks(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('nav-drop-services')) {
            servicesLinkRef.current.classList.add("services-links-active")
        }
    }
    function closeServicesLinks(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('left-link-services-x')) {
            servicesLinkRef.current.classList.remove("services-links-active")
        }
    }



    const blogLinkRef = useRef()

    function openBlogLinks(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('nav-drop-blog')) {
            blogLinkRef.current.classList.add("blog-links-active")
        }
    }
    function closeBlogLinks(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('left-link-blog-x')) {
            blogLinkRef.current.classList.remove("blog-links-active")
        }
    }

    const overlayMenuRef = useRef()

    function openOverlayMenu(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('nav-search')) {
            overlayMenuRef.current.classList.add("overlay-menu-active")
        }
    }

    function closeOverlayMenu(e) {
        const clickedPlace = e.target;

        if (clickedPlace.classList.contains('overlay-search')) {
            overlayMenuRef.current.classList.remove("overlay-menu-active")
        }
    }


    const [dropdown, setDropdown] = useState(false)
    const [homeDropdown, homeSetDropdown] = useState(false)
    const [aboutDropdown, aboutSetDropdown] = useState(false)
    const [blogDropdown, blogSetDropdown] = useState(false)

    return (
        <>

            <div className="left-navbar" ref={leftNavRef}>
                <FaTimes className='nav-cross-icon' onClick={closeLeftNav} />

                <ul className='left-nav-links'>

                    {leftNavItems.map(item => {

                        if (item.title === "Contact") {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title}</Link>
                                </li>
                            )
                        }
                        if (item.title === "Home") {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title} <MdArrowDropDown className='nav-drop' onClick={openHomeLinks} /></Link>
                                </li>
                            )
                        }
                        if (item.title === "About") {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title} <MdArrowDropDown className='nav-drop-about' onClick={openAboutLinks} /></Link>
                                </li>
                            )
                        }
                        if (item.title === "Services") {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title} <MdArrowDropDown className='nav-drop-services' onClick={openServicesLinks} /></Link>
                                </li>
                            )
                        }
                        if (item.title === "Blog") {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title} <MdArrowDropDown className='nav-drop-blog' onClick={openBlogLinks} /></Link>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title} <MdArrowDropDown /></Link>
                                </li>
                            )
                        }

                    })
                    }
                </ul>

                <ul className='left-home-links' ref={homeLinkRef}>
                    <TiTimes className='left-link-x' onClick={closeHomeLinks} />

                    {leftHomeDropdown.map(item => {
                        return (
                            <>
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title}</Link>
                                </li>
                            </>
                        )
                    })}
                </ul>

                <ul className='left-about-links' ref={aboutLinkRef}>
                    <TiTimes className='left-link-about-x' onClick={closeAboutLinks} />

                    {leftAboutDropdown.map(item => {
                        return (
                            <>
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title}</Link>
                                </li>
                            </>
                        )
                    })}
                </ul>

                <ul className='left-services-links' ref={servicesLinkRef}>
                    <TiTimes className='left-link-services-x' onClick={closeServicesLinks} />

                    {leftServicesDropdown.map(item => {
                        return (
                            <>
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title}</Link>
                                </li>
                            </>
                        )
                    })}
                </ul>
                <ul className='left-blog-links' ref={blogLinkRef}>
                    <TiTimes className='left-link-blog-x' onClick={closeBlogLinks} />

                    {leftBlogDropdown.map(item => {
                        return (
                            <>
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title}</Link>
                                </li>
                            </>
                        )
                    })}
                </ul>

            </div>

            <nav className="navbar">
                <div className='navbar-logo'>
                    <img src={Logo} alt="Site Logo" />
                </div>

                <ul className='nav-items'>

                    {navItems.map(item => {

                        if (item.title === "Home") {
                            return (
                                <li key={item.id} className={item.cName}
                                    onMouseEnter={() => homeSetDropdown(true)}
                                    onMouseLeave={() => homeSetDropdown(false)}
                                >
                                    <Link to={item.path}
                                    >
                                        {item.title} <MdArrowDropDown /> </Link>
                                    {homeDropdown && <HomeDropdown />}
                                </li>
                            )
                        }

                        if (item.title === "Services") {
                            return (
                                <li key={item.id} className={item.cName}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path}
                                    >
                                        {item.title} <MdArrowDropDown /> </Link>
                                    {dropdown && <Dropdown />}
                                </li>
                            )
                        }

                        if (item.title === "About") {
                            return (
                                <li key={item.id} className={item.cName}
                                    onMouseEnter={() => aboutSetDropdown(true)}
                                    onMouseLeave={() => aboutSetDropdown(false)}
                                >
                                    <Link to={item.path}
                                    >
                                        {item.title} <MdArrowDropDown /></Link>
                                    {aboutDropdown && <AboutDropdown />}
                                </li>
                            )
                        }

                        if (item.title === "Blog") {
                            return (
                                <li key={item.id} className={item.cName}
                                    onMouseEnter={() => blogSetDropdown(true)}
                                    onMouseLeave={() => blogSetDropdown(false)}
                                >
                                    <Link to={item.path}
                                    >
                                        {item.title} <MdArrowDropDown /></Link>
                                    {blogDropdown && <BlogDropdown />}
                                </li>
                            )
                        }

                        if (item.title === "Contact") {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title}</Link>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.title} <MdArrowDropDown /></Link>
                                </li>
                            )
                        }

                    })}

                </ul>

                <div className='quote'>
                    <div>
                        <BiSearch className='nav-search' onClick={openOverlayMenu} />
                    </div>

                    <div className='navbar-language'>
                        <MdLanguage className='language' />
                        <div className="select-box">
                            <select id="languages">
                                <option value="english">English</option>
                                <option value="russian">Russian</option>
                            </select>
                        </div>

                    </div>


                    <div className='nav-button'>
                        <Button buttonDeyeri="GET FREE QUOTE" />
                    </div>

                    <div className='nav-bars' onClick={openLeftNav} >
                        <FaBars className='nav-bars' />
                    </div>


                </div>

                {/* <Dropdown/> */}
            </nav>

            <form action="">

                <div className='overlay-search' ref={overlayMenuRef} onClick={closeOverlayMenu}>
                    <input type="text" className='overlay-search-input' placeholder='Search here...' />
                    <BiSearch className='overlay-search-icon' />
                    {/* <AiOutlineClose className='overlay-x' /> */}
                </div>
            </form>



        </>
    )
}

export default Navbar