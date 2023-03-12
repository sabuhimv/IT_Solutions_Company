import React, { useState,useEffect }from 'react'
import './Dropdown.css'
import { serviceDropdown } from './NavItems'
import {Link} from 'react-router-dom'
import AOS from "aos";

const Dropdown = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [dropdown,setDropdown] =useState(false);


    return (
    <>
    <ul data-aos="zoom-in-up" data-aos-duration="500" className={dropdown ? "services-submenu clicked" : "services-submenu"} 
    // <ul className="services-submenu" 
    onClick={() => setDropdown(!dropdown)}
    >
        {serviceDropdown.map(item=> {
            return(
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

export default Dropdown