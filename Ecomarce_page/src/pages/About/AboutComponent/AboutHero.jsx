import React from 'react'
import img from '../../../assets/images/about.png'
import img1 from '../../../assets/images/about-2.png'
import img2 from '../../../assets/images/about-3.png'
import Footer from '../../../Components/SharedComponent/Footer/Footer'
import SectionHeading from '../../../Components/SharedComponent/SectionHeading'

const AboutHero = () => {
  return (
    <div>
      <div className="mt-5 container mx-auto px-8">
        <div className="flex justify-center flex-1 gap-8">
          <div className="flex items-center gap-4 flex-1">
            <img className="w-84 rounded-md" src={img} alt="About main" />
            <div className="flex flex-col gap-4 justify-center flex-1">
              <img className="w-84 rounded-md" src={img1} alt="About second" />
              <img className="w-84 rounded-md" src={img2} alt="About third" />
            </div>
          </div>
          <div className="flex-1 mt-25 ">
            <SectionHeading Heading="Who We Are?" colorHeading="We Are?" />
            <h1 className="uppercase text-gray-200 font-bold text-3xl mt-4">
              We’re here to serve only the best products for you. <br />
              Enriching your homes with the best essentials.
            </h1>
            <p className="mt-5 text-gray-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
