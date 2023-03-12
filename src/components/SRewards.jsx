import React, { useEffect } from 'react'
import './SRewards.css'
import { HiOutlineMailOpen,HiOutlineLocationMarker } from "react-icons/hi";
import AOS from "aos";

const SRewards = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='special-rewards-container' data-aos="fade-up" data-aos-duration="2000">
        <div className='srewards-left'>
            <div className='sr-left-icon'>
                <HiOutlineMailOpen/>
            </div>
            <h2>Get Special <br /> Rewards</h2>
        </div>
        <div className='srewards-right'>
            <form>
                <div className='sr-right-icon'>
                    <HiOutlineLocationMarker/>
                </div>
                <input type="email" placeholder="Enter Address" />
                <button className='sr-right-btn' type='submit'>Subscribe</button>
            </form>
            
        </div>

    </div>
  )
}

export default SRewards