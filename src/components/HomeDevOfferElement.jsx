import React from 'react'
import './HomeDevOfferElement.css'
import { TbPuzzle } from "react-icons/tb";

const HomeDevOfferElement = ({hd_icon,hd_offer_title,hd_offer_li_1,hd_offer_li_2,hd_offer_li_3,hd_offer_li_4,hd_offer_li_5}) => {
    return (
        <div className='home-dev-offer-element-container'>
            <div className='hd-offer-icon'>
                {hd_icon}
            </div>

            <a href="">{hd_offer_title}</a>

            <ul>
                <li>{hd_offer_li_1}</li>
                <li>{hd_offer_li_2}</li>
                <li>{hd_offer_li_3}</li>
                <li>{hd_offer_li_4}</li>
                <li>{hd_offer_li_5}</li>
            </ul>
        </div>
    )
}

export default HomeDevOfferElement