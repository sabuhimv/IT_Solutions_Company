import React, { useEffect } from 'react'
import './Solution.css'
import AOS from "aos";

const Solution = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <div data-aos="flip-left" data-aos-duration="2000" className='solutionElement'>
        <div className='solutionHead'>
            <img src={props.icon} alt="" />
        </div>

        <div className='solutionBody'>
            <h3>UNLOCK TRAPPED INFORMATION</h3>
            <p>Sedut perspicias unomnis natus error sit voluptatemc accusanti remqua</p>
        </div>
    </div>
    
    </>
  )
}

export default Solution