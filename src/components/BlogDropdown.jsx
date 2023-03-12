import React, { useState,useEffect }from 'react'
// import { aboutDropdown } from './NavItems';
import { blogDropdown } from './NavItems'
import {Link} from 'react-router-dom'
import './BlogDropdown.css'
import AOS from "aos";

const BlogDropdown = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [dropdown, setDropdown] = useState(false);

    return (

        <>
            <ul data-aos="zoom-in-up" data-aos-duration="500" className={dropdown ? "blog-submenu clicked" : "blog-submenu"}
                // <ul className="services-submenu" 
                onClick={() => setDropdown(!dropdown)}
            >
                {blogDropdown.map(item => {
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

export default BlogDropdown



// AboutDropdown