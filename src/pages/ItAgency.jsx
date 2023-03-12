import React from 'react'
import AgencyStart from '../components/AgencyStart'
import AgencyAbout from '../components/AgencyAbout'
import AgencyEnterprise from '../components/AgencyEnterprise'
import ContactArea from '../components/ContactArea'
import CustomerFeedback from '../components/CustomerFeedback'
import CustomerService from '../components/CustomerService'
import LatestProjects from '../components/LatestProjects'
import LatestServices from '../components/LatestServices'
import Quote from '../components/Quote'
import WhyUs from '../components/WhyUs'
import News from '../components/News'
import SRewards from '../components/SRewards'

const ItAgency = () => {
  return (
    <>
    <AgencyStart/>
    <AgencyAbout/>
    <AgencyEnterprise/>
    <Quote/>
    <LatestServices/>
    <WhyUs/>
    <LatestProjects/>
    <CustomerService/>
    <ContactArea/>
    <CustomerFeedback/>
    <News/>
    </>
  )
}

export default ItAgency