import React from 'react'
import ContactInformation from '../components/ContactInformation'
import ContactMap from '../components/ContactMap'
import ContactMessage from '../components/ContactMessage'
import PagesHead from '../components/PagesHead'

const Contact = () => {
  return (
    <div>
        <PagesHead pages_name="Contact Us" />
        <ContactInformation/>
        <ContactMap/>
        <ContactMessage/>
    </div>
  )
}

export default Contact