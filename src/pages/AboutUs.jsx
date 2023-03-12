import React from 'react'
import AboutUsHistory from '../components/AboutUsHistory'
import AboutUsOffers from '../components/AboutUsOffers'
import AboutUsServices from '../components/AboutUsServices'
import PagesHead from '../components/PagesHead'
import CompanyPartners from '../components/CompanyPartners'
import TeamStyle from '../components/TeamStyle'
import AboutUsTeam from '../components/AboutUsTeam'
import OurTestimonials from '../components/OurTestimonials'

const AboutUs = () => {
  return (
    <>
    <PagesHead pages_name={"About Us"} pa/>
    <AboutUsOffers/>
    <AboutUsHistory/>
    <AboutUsServices/>
    <AboutUsTeam/>
    <OurTestimonials/>
    </>
  )
}

export default AboutUs