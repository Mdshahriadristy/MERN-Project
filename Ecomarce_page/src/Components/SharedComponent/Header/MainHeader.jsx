import { CiUser } from 'react-icons/ci'
import { FaCartPlus } from 'react-icons/fa'
import { MdAppRegistration } from 'react-icons/md'
import logo from '../../../assets/images/logo.png'

const MainHeader = () => {
  return (
    <header className="bg-gray-200 shadow-md py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            className="w-20 md:w-24 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Middle: Search Bar */}
        <div className="w-full md:w-[40%]">
          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 placeholder-gray-400 transition-all duration-300"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              />
            </svg>
          </div>
        </div>

        {/* Right: User, Register, Cart */}
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full md:w-auto text-gray-700">
          {/* User */}
          <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
            <CiUser size={22} />
            <div className="hidden sm:block leading-tight">
              <p className="text-xs text-gray-500">Account</p>
              <p className="text-sm font-semibold">Login</p>
            </div>
          </div>

          {/* Register */}
          <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
            <MdAppRegistration size={22} />
            <div className="hidden sm:block leading-tight">
              <p className="text-xs text-gray-500">Register</p>
              <p className="text-sm font-semibold">Sign Up</p>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer relative">
            <FaCartPlus size={20} />
            <div className="hidden sm:block leading-tight">
              <p className="text-xs text-gray-500">Cart</p>
              <p className="text-sm font-semibold">View</p>
            </div>
            {/* Cart Badge */}
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              2
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
