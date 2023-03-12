import React, { useEffect } from 'react'
import './Footer.css'
import Logo2 from '../assets/images/logo-2.png'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsLinkedin, BsYoutube } from "react-icons/bs";

import AOS from "aos";

const Footer = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='footer'>

            <div className="footer-container">
                <div className="contact-and-services">
                    <div className='contact' data-aos="fade-up" data-aos-duration="1000">
                        <div className='contact-logo'><img src={Logo2} alt="" /></div>
                        <h4>Don’t Hesited to Conatct <br /> With Our Experites</h4>
                        <span className='footer-envelope'><a href=""> hotline@gmail.com</a></span>
                        <span className='footer-map'> 55 Main Street, 2nd Block, USA</span>
                        <span className='footer-phone'><a href="tel:+994506489903"> +994 50 648 99 03</a></span>
                    </div>

                    <div className="services" data-aos="fade-up" data-aos-duration="1500">
                        <h4>Best Services</h4>

                        <ul>
                            <li>Web & IT Consulting</li>
                            <li>Web & IT Consulting</li>
                            <li>Web & IT Consulting</li>
                            <li>Web & IT Consulting</li>
                            <li>Web & IT Consulting</li>
                            <li>Web & IT Consulting</li>
                        </ul>

                    </div>

                </div>

                <div className="company-and-support">
                    <div className="company" data-aos="fade-up" data-aos-duration="2000">
                        <h4>IT Company</h4>

                        <ul>
                            <li>About Company</li>
                            <li>About Company</li>
                            <li>About Company</li>
                            <li>About Company</li>
                            <li>About Company</li>
                            <li>About Company</li>
                        </ul>

                    </div>
                    <div className="support" data-aos="fade-up" data-aos-duration="3000">
                        <h4>Our Support</h4>

                        <ul>
                            <li>Premium Support</li>
                            <li>Premium Support</li>
                            <li>Premium Support</li>
                            <li>Premium Support</li>
                            <li>Premium Support</li>
                            <li>Premium Support</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className='copyright-line'></div>

            <div className='footer-copyright'>
                <div className='copyright-title'>
                    <p>Copyright © 2023 MunTech. All Right Reserved</p>
                </div>

                <div className='social-link'>
                    <div><FaFacebookF /></div>
                    <div><FaTwitter /></div>
                    <div><BsLinkedin /></div>
                    <div><BsYoutube /></div>
                </div>
            </div>

        </div>


    )
}

export default Footer