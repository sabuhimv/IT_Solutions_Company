import React from 'react'
import DigitalSolutions from '../components/DigitalSolutions'
import OurTestimonials from '../components/OurTestimonials'
import PagesHead from '../components/PagesHead'
import ProfessionalServices from '../components/ProfessionalServices'

const ITServices = () => {
  return (
    <>
    <PagesHead pages_name={"IT Services"}/>

    <DigitalSolutions/>
    <ProfessionalServices/>
    <OurTestimonials/>
    </>

  )
}

export default ITServices