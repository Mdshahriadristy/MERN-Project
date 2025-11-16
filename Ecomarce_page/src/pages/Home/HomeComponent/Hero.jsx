import React from 'react'
import bg from '../../../assets/images/HERO-COVER.jpg'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div>
      <div
        className="  bg-cover bg-center mx-auto px-24 container h-[70vh] my-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" flex flex-col justify-center h-full items-start gap-3">
          <h3 className="cp text-2xl font-semibold">70% Off For This Winter</h3>
          <h1 className="cp text-5xl font-bold">
            Bigest Sale For <br />
            Winter Man & Woman
          </h1>

          <Link to="ShopNow">
            <button className="relative inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg transition-all duration-500 ease-out hover:scale-110 hover:shadow-[0_0_20px_rgba(147,51,234,0.8)]">
              <span className="relative z-10">Shop Now</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
