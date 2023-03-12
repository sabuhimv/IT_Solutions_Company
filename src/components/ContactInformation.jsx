import React from 'react'
import './ContactInformation.css'
import { HiOutlineMail } from "react-icons/hi";
import { BiMapPin, BiPhoneCall } from "react-icons/bi";

const ContactInformation = () => {
    return (
        <div className='contact-information-container'>
            <div className="contact-info-left">

                <div className='contact-info-location'>
                    <div className='contact-info-element'>
                        <div className="contact-info-element-icon">
                            <BiMapPin />
                        </div>
                        <div className="contact-info-element-text">
                            <h5 className='black-h5'>New York</h5>
                            <p className='gray-p'>55 Main Street, B - Block, 3rd Floor, New York</p>
                        </div>
                    </div>

                    <div className='contact-info-element'>
                        <div className="contact-info-element-icon">
                            <BiMapPin />
                        </div>
                        <div className="contact-info-element-text">
                            <h5 className='black-h5'>San Francisco</h5>
                            <p className='gray-p'>720 Main Street, B - Block, Floor, San Francisco</p>
                        </div>
                    </div>
                </div>

                <div className='contact-info-connect'>
                    <div className='contact-info-element'>


                        <div className="contact-info-element-icon">
                            <HiOutlineMail />
                        </div>
                        <div className="contact-info-element-text info-hotlines">
                            <h5 className='black-h5'>Our Hotlines</h5>
                            <p>
                                <span>Mobile :</span>
                                <a href="tel:+01234567899">+012 (345) 678 99</a>

                                <span>Phone :</span>
                                <a href="tel:+123456789">+123456789</a>
                            </p>
                        </div>
                    </div>

                    <div className='contact-info-element'>
                        <div className="contact-info-element-icon">
                            <BiPhoneCall />
                        </div>
                        <div className="contact-info-element-text">
                            <h5 className='black-h5'>Email Address</h5>
                            <p className='gray-p'>hotlines@gmail.com www.infor.net</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='contact-info-right'>
                <h3 className='black-h3'>Working Hour</h3>
                <h5 className='black-h5'>Sun - Friday : 08 am - 09pm</h5>
                <h5 className='st-close black-h5'>Satarday Close</h5>
                <h3 className='black-h3'>Ready To Work Us ?</h3>
                <p className='gray-p'>Sed perspiciatis unde omnisnae voluptate accusantie dolore</p>
                <a href="" className='orange-bg-span'>Contact Us</a>
            </div>
        </div>
    )
}

export default ContactInformation