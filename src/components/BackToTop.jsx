import classNames from 'classnames';
import React from 'react'
import {useEffect,useState} from 'react';
import './BackToTop.css'

import { RiArrowDropUpLine } from "react-icons/ri";
const BackToTop = () => {

    const [backToTopButton,setBackToTopButton] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }
            else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
            
        })
    }
  return (
    <div>
        {backToTopButton && (
            <button className='back-to-top-button' style={{
                position:'fixed',
                bottom:'50px',
                right:'50px',
                height:'50px',
                width:'50px',
                fontSize:'50px',
                // background:'#FD4A18',
                color:'#fff',
                border:'none',
                outline:'none',
                borderRadius:'50%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
            } }
            onClick={scrollUp}
            >
                <RiArrowDropUpLine/>
            </button>
        )}
    </div>
  )
}

export default BackToTop