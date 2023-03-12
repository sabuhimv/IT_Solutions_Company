import React, { useState,useEffect }from 'react'
import { homeDropdown } from './NavItems';
import {Link} from 'react-router-dom'
import './HomeDropdown.css'

import AOS from "aos";

const HomeDropdown = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const [dropdown, setDropdown] = useState(false);

    return (

        <>
            <ul data-aos="zoom-in-up" data-aos-duration="500"  className={dropdown ? "home-submenu clicked" : "home-submenu"}
                // <ul className="services-submenu" 
                onClick={() => setDropdown(!dropdown)}
            >
                {homeDropdown.map(item => {
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

export default HomeDropdown