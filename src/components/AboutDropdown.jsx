import React, { useState,useEffect }from 'react'
// import { aboutDropdown } from './NavItems';
import { aboutDropdown } from './NavItems'
import {Link} from 'react-router-dom'
import './AboutDropdown.css'
import AOS from "aos";

const AboutDropdown = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [dropdown, setDropdown] = useState(false);

    return (

        <>
            <ul data-aos="zoom-in-up" data-aos-duration="500" className={dropdown ? "about-submenu clicked" : "about-submenu"}
                // <ul className="services-submenu" 
                onClick={() => setDropdown(!dropdown)}
            >
                {aboutDropdown.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName}
                                onClick={() => setDropdown(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default AboutDropdown



// AboutDropdown