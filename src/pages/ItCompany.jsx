import React from 'react'
import BestFeatures from '../components/BestFeatures'
import CompanyFeatures from '../components/CompanyFeatures'
import CompanyPartners from '../components/CompanyPartners'
import CompanyStart from '../components/CompanyStart'
import LatestSkills from '../components/LatestSkills'
import OurOffer from '../components/OurOffer'
import OurServices from '../components/OurServices'
import OurTestimonials from '../components/OurTestimonials'
import ProductDesign from '../components/ProductDesign'
import Team from '../components/Team'
import TeamStyle from '../components/TeamStyle'

const ItCompany = () => {
  return (
    <>
    <CompanyStart/>
    <OurOffer/>
    <CompanyFeatures/>
    <BestFeatures/>
    <OurServices/>
    <ProductDesign/>
    <CompanyPartners/>
    <Team/>
    {/* <TeamStyle/> */}
    {/* <LatestSkills/> */}
    <OurTestimonials/>
    </>
  )
}

export default ItCompany