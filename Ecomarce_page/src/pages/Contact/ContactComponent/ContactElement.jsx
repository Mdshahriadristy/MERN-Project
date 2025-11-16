import React from 'react'
import SectionHeading from '../../../Components/SharedComponent/SectionHeading'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import Footer from '../../../Components/SharedComponent/Footer/Footer'
import ContactForm from './ContactForm'

const ContactElement = () => {
  const contacts = [
    {
      icon: <FaMapMarkerAlt className="text-green-500 text-3xl" />,
      title: 'Location',
      info: '1213 Main Street, Dhaka, Bangladesh',
    },
    {
      icon: <FaPhoneAlt className="text-green-500 text-3xl" />,
      title: 'Phone',
      info: '01842445749',
    },
    {
      icon: <FaEnvelope className="text-red-500 text-3xl" />,
      title: 'Email',
      info: 'mdshahriadristy@gmail.com',
    },
  ]

  return (
    <div>
      <div className="mx-auto px-24 container ">
        {/* Section Heading */}
        <div className="mt-10">
          <div className="flex justify-center text-center mb-10">
            <SectionHeading
              Heading="Our "
              colorHeading="Services"
              descrition="Customer service should not be a department. It should be the entire company."
            />
          </div>

          {/* Contact Cards */}
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 bg-blue-500 text-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  {contact.icon}
                  <h3 className="text-xl font-semibold">{contact.title}</h3>
                  <p className="text-gray-100 text-center">{contact.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="mt-16 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.8127919504836!2d90.42419807511563!3d23.7657291786598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sBdcalling%20IT%20Ltd.%20-%20Corporate%20Office!5e1!3m2!1sen!2sbd!4v1762936671113!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="rounded-2xl shadow-lg max-w-5xl"
          ></iframe>
        </div>
        <div>
          <ContactForm />
        </div>
        {/* Footer */}
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  )
}

export default ContactElement
