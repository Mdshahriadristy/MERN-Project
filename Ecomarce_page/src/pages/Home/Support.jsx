import React from 'react'
import { AiFillAmazonCircle } from 'react-icons/ai'
import { IoHome } from 'react-icons/io5'
import { FaCartArrowDown, FaHeadphones } from 'react-icons/fa6'

const Support = () => {
  const features = [
    {
      icon: <AiFillAmazonCircle className="text-4xl text-pink-500 mx-auto mb-3" />,
      title: 'Free Shipping',
      description: 'Free shipping on all US orders or orders above $200',
    },
    {
      icon: <IoHome className="text-4xl text-blue-500 mx-auto mb-3" />,
      title: '24x7 Support',
      description: 'Contact us 24 hours a day, 7 days a week',
    },
    {
      icon: <FaCartArrowDown className="text-4xl text-green-500 mx-auto mb-3" />,
      title: '30 Days Return',
      description: 'Simply return it within 30 days for an exchange',
    },
    {
      icon: <FaHeadphones className="text-4xl text-orange-500 mx-auto mb-3" />,
      title: 'Payment Secure',
      description: 'Secure payment processing available 24/7',
    },
  ]

  return (
    <div className="container mx-auto px-6 md:px-24 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((f, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border hover:shadow-lg transition-all duration-300"
          >
            {f.icon}
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Support
