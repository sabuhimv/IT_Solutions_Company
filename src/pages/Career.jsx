import React from 'react'
import CareerBenefits from '../components/CareerBenefits'
import CareerFeatues from '../components/CareerFeatues'
import CareerJobs from '../components/CareerJobs'
import PagesHead from '../components/PagesHead'

const Career = () => {
  return (
    <div>
        <PagesHead pages_name={"Career"}/>
        <CareerBenefits/>
        <CareerFeatues/>
        <CareerJobs/>
    </div>
  )
}

export default Career