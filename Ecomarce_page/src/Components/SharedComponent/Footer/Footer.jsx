import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { HiPhone, HiMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="container mx-auto px-6 md:px-24 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1️⃣ Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-3">
            Md. Shahria Dristy
          </h2>
          <p className="text-gray-600 mb-4">
            Shahria is the biggest market of grocery products.
            <br /> Get your daily needs from our store.
          </p>

          <div className="flex gap-3 mt-4">
            <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
              <span className="text-gray-800 font-medium">Google Play</span>
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
              <span className="text-gray-800 font-medium">App Store</span>
            </button>
          </div>
        </div>

        {/* 2️⃣ Category Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Category</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Dairy & Milk</li>
            <li>Snack & Spice</li>
            <li>Fast Food</li>
            <li>Juice & Drinks</li>
            <li>Bakery</li>
            <li>Seafood</li>
          </ul>
        </div>

        {/* 3️⃣ Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms & Conditions</li>
            <li>Secure Payment</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* 4️⃣ Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-green-600" />
              2548 Broaddus Maple Court, Madisonville KY 4783, USA.
            </li>
            <li className="flex items-center gap-2">
              <HiPhone className="text-green-600" /> +8801842-445749
            </li>
            <li className="flex items-center gap-2">
              <HiMail className="text-green-600" /> mdshahriadristy@gmail.com
            </li>
          </ul>

          <div className="flex gap-4 text-gray-700 text-xl mt-5">
            <FaFacebookF className="hover:text-green-600 cursor-pointer" />
            <FaTwitter className="hover:text-green-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-green-600 cursor-pointer" />
            <FaInstagram className="hover:text-green-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6 text-sm text-gray-600 flex items-center justify-between px-6 md:px-24">
        <p>
          © 2025{' '}
          <span className="text-green-600 font-semibold">Shahria Dristy</span>.
          All rights reserved.
        </p>

        <div className="flex gap-4 text-2xl text-gray-700">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmex />
        </div>
      </div>
    </footer>
  )
}

export default Footer
