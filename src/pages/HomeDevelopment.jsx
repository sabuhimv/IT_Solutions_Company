import React from 'react'
import HomeDevAgency from '../components/HomeDevAgency'
import HomeDevCompany from '../components/HomeDevCompany'
import HomeDevCta from '../components/HomeDevCta'
import HomeDevOffer from '../components/HomeDevOffer'
import Partners from '../components/Partners'

const HomeDevelopment = () => {
  return (
    <div>
        <HomeDevAgency/>
        <HomeDevOffer/>
        <HomeDevCompany/>
        <HomeDevCta/>
        <Partners/>

    </div>
  )
}

export default HomeDevelopment