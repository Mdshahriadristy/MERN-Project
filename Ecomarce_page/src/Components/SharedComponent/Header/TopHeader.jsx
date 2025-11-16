import React from 'react'
import { TbPhoneCall } from 'react-icons/tb'
import { SiWhatsapp } from 'react-icons/si'

const TopHeader = () => {
  return (
    <div className="bg-[#F8F8FB] py-2 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-700">
        {/* Left Side: Phone & WhatsApp */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
          <div className="flex items-center gap-1">
            <TbPhoneCall className="text-blue-500" />
            <p className="hover:text-blue-600 transition-colors cursor-pointer">
              01842445749
            </p>
          </div>
          <div className="flex items-center gap-1">
            <SiWhatsapp className="text-green-500" />
            <p className="hover:text-green-600 transition-colors cursor-pointer">
              01842445749
            </p>
          </div>
        </div>

        {/* Middle: Slogan */}
        <div className="text-center text-xs sm:text-sm font-medium text-gray-600 hidden sm:block">
          World's Fastest Online Shopping Destination
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-gray-700 text-xs sm:text-sm">
          <p className="hover:text-blue-500 cursor-pointer">Help?</p>
          <p className="hover:text-blue-500 cursor-pointer">Track Order</p>
          <p className="hover:text-blue-500 cursor-pointer">English</p>
          <p className="hover:text-blue-500 cursor-pointer">Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
