import React from 'react'

const SectionHeading = ({ Heading, colorHeading, descrition }) => {
  return (
    <div>
      <h3 className="text-4xl text-gray-700 font-semibold">
        {Heading} <span className="cp">{colorHeading}</span>
      </h3>
      <p className="ts">{descrition}</p>
    </div>
  )
}

export default SectionHeading
