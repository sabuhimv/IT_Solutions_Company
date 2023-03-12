import React from 'react'
import Counter from '../components/Counter'
import CyberCounter from '../components/CyberCounter'
import CyberDigital from '../components/CyberDigital'
import CyberMain from '../components/CyberMain'
import OurTestimonials from '../components/OurTestimonials'
import PagesHead from '../components/PagesHead'
import ProfessionalServices from '../components/ProfessionalServices'

const CyberSecurity = () => {
  return (
    <>
    <PagesHead pages_name={"Cyber Security"}/>
    <CyberMain/>
    <CyberCounter/>
    <CyberDigital/>
    <ProfessionalServices/>
    <OurTestimonials/>
    {/* <ProfessionalServices/> */}
    </>
  )
}

export default CyberSecurity