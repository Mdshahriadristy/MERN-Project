import React from 'react'
import SectionHeading from '../../../Components/SharedComponent/SectionHeading'
import Support from '../../Home/Support'
import Footer from '../../../Components/SharedComponent/Footer/Footer'

const AboutService = () => {
  return (
    <div>
      <div className="flex justify-center text-center">
        <SectionHeading
          Heading={'Our '}
          colorHeading={'Services'}
          descrition={
            'Customer service should not be a department. It should be the entire company.'
          }
        />
      </div>
      <div>
        <Support />
        <Footer />
      </div>
    </div>
  )
}

export default AboutService
