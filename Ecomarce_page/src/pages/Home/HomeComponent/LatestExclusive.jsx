import React from 'react'
import cover from '../../../assets/images/execulisive colloction.jpg'

const LatestExclusive = () => {
  return (
    <div
      className="h-[70vh] bg-cover bg-center flex justify-end items-end rounded-md text-right px-24 container mx-auto"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="text-white space-y-4 mb-10">
        <p className="font-semibold text-4xl">30% Off Sale</p>
        <h1 className="font-semibold text-6xl leading-tight">
          Latest Exclusive <br /> Summer Collection
        </h1>
        <button className="bgp rounded-md ml-6 px-6 py-3 font-medium hover:opacity-90 transition">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default LatestExclusive
