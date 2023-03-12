import React, { useEffect, useRef } from 'react'
import './Engineer.css'
import AOS from "aos";
import { RxCross1 } from "react-icons/rx";
import { AiFillFolderOpen } from "react-icons/ai";
import { GiCrossedSabres } from "react-icons/gi";



const Engineer = ({ engineer_image, engineer_name, engineer_level }) => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const textEngineerRef = useRef()

  function openOverlayMenu(e) {
    const kliklenenYer = e.target

    if (kliklenenYer.classList.contains('open-text')) {
      textEngineerRef.current.classList.add('text-active')
    }
  }

  function closeOverlayMenu(e) {
    const kliklenenYer = e.target

    if (kliklenenYer.classList.contains('text-engineer')) {
      textEngineerRef.current.classList.remove('text-active')
    }

    if (kliklenenYer.classList.contains('engineer-name')) {
      textEngineerRef.current.classList.remove('text-active')
    }
    if (kliklenenYer.classList.contains('engineer-level')) {
      textEngineerRef.current.classList.remove('text-active')
    }
  }

  return (
    <>
      <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className='about-engineer'>
        <div className='bg-engineer' onClick={openOverlayMenu}>
          <img className='open-text' src={engineer_image} alt="" />
        </div>

        
        <div className='text-engineer' ref={textEngineerRef} onClick={closeOverlayMenu}>
          <a className='engineer-name' onClick={closeOverlayMenu}>{engineer_name}</a>
          <p className='engineer-level' onClick={closeOverlayMenu}>{engineer_level}</p>
        </div>
      </div>
    </>
  )
}

export default Engineer