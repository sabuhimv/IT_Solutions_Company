import React from 'react'
import './HomeDevOffer.css'
import HomeDevOfferElement from './HomeDevOfferElement'
import { TbPuzzle } from "react-icons/tb";
import { FaBezierCurve ,FaMobileAlt,FaLaptopCode } from "react-icons/fa";
const HomeDevOffer = () => {
  return (
    <div className='home-dev-offer-container'>
        <div className="home-dev-offer-head">
            <span className='blue-light-span'>what we offer</span>
            <h2 className='capitalize-h2'>Omnichannel support experience enhanced, with Freshdesk!</h2>
        </div>

        <div className='home-dev-offer-body'>
            <HomeDevOfferElement hd_icon={<TbPuzzle/>} hd_offer_title={"IT Consulting"} hd_offer_li_1={"Customer Experience"} hd_offer_li_2={"Information Architecture"} hd_offer_li_3={"Content Strategy"} hd_offer_li_4={"Operational Workflow"} hd_offer_li_5={"Technical Consultation"}/>
            <HomeDevOfferElement hd_icon={<FaBezierCurve/>} hd_offer_title={"Web Design"} hd_offer_li_1={"Customer Experience"} hd_offer_li_2={"Information Architecture"} hd_offer_li_3={"Content Strategy"} hd_offer_li_4={"Operational Workflow"} hd_offer_li_5={"Technical Consultation"}/>
            <HomeDevOfferElement hd_icon={<FaMobileAlt/>} hd_offer_title={"App Development"} hd_offer_li_1={"Android App Development"} hd_offer_li_2={"Iphone Development"} hd_offer_li_3={"Web & App Solutions"} hd_offer_li_4={"Corporate Development"} hd_offer_li_5={"Technical Solutions"}/>
            <HomeDevOfferElement hd_icon={<FaLaptopCode/>} hd_offer_title={"Web Development"} hd_offer_li_1={"WordPress Themes"} hd_offer_li_2={"Php Advance Support"} hd_offer_li_3={"HTML & CSS Coding"} hd_offer_li_4={"Web Solutions"} hd_offer_li_5={"Technical Supports"}/>
        </div>
    </div>
  )
}

export default HomeDevOffer