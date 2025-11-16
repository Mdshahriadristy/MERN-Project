import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { FaCartShopping } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3 md:px-24">
        {/* Left - Category */}
        <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 cursor-pointer px-3 py-2 rounded-lg transition-all duration-300">
          <BiCategoryAlt size={22} />
          <p className="font-medium hidden sm:block">All Categories</p>
        </div>

        {/* Center - Nav Links */}
        <div className="hidden md:flex gap-6 text-base font-semibold">
          {['/', '/About', '/Blog', '/Contact', '/ShopNow'].map((path, index) => {
            const names = ['Home', 'About', 'Blog', 'Contact', 'Shop']
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative transition-all duration-300 hover:text-yellow-300 ${
                    isActive
                      ? 'text-yellow-300 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-yellow-300 after:rounded-full'
                      : ''
                  }`
                }
              >
                {names[index]}
              </NavLink>
            )
          })}
        </div>

        {/* Right - Cart */}
        <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 cursor-pointer px-3 py-2 rounded-lg transition-all duration-300">
          <FaCartShopping size={20} />
          <p className="font-medium hidden sm:block">Shop Now</p>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-center gap-5 py-2 border-t border-white/20 text-sm">
        {['/', '/About', '/Blog', '/ShopNow'].map((path, index) => {
          const names = ['Home', 'About', 'Blog', 'Shop']
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `transition-all duration-200 ${
                  isActive ? 'text-yellow-300 font-semibold' : ''
                }`
              }
            >
              {names[index]}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default Navber
