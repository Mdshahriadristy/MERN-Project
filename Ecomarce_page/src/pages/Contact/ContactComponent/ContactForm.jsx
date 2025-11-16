import React, { useState } from 'react'
import SectionHeading from '../../../Components/SharedComponent/SectionHeading'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✅ Thank you! Your message has been sent successfully.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="mt-20 container mx-auto px-6">
      {/* Section Heading */}
      <div className="flex justify-center text-center mb-12">
        <SectionHeading
          Heading="Get In "
          colorHeading="Touch"
          descrition="We’d love to hear from you! Drop a message below."
        />
      </div>

      {/* Unique Form Card */}
      <div className="relative max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl p-[2px] overflow-hidden">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-gray-900 text-white rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="relative inline-block px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Send Message 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
