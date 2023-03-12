import React from 'react'
import HelpDeskAnalytics from '../components/HelpDeskAnalytics'
import HelpDeskCounter from '../components/HelpDeskCounter'
import HelpDeskDesigned from '../components/HelpDeskDesigned'
import HelpDeskFeedback from '../components/HelpDeskFeedback'
import HelpDeskInto from '../components/HelpDeskInto'
import HelpDeskPopular from '../components/HelpDeskPopular'
import HelpDeskReport from '../components/HelpDeskReport'
import HelpDeskSubscribe from '../components/HelpDeskSubscribe'
import HelpSupport from '../components/HelpSupport'

const HelpDesk = () => {
  return (
    <>
    <HelpSupport/>
    <HelpDeskInto/>
    <HelpDeskDesigned/>
    <HelpDeskReport/>
    <HelpDeskAnalytics/>
    <HelpDeskCounter/>
    {/* <HelpDeskFeedback/> */}
    <HelpDeskPopular/>
    <HelpDeskSubscribe/>
    </>
  )
}

export default HelpDesk