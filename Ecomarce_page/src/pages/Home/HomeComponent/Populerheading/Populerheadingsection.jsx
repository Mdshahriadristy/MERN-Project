import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { BiSolidCategory } from 'react-icons/bi'
import SectionHeading from '../../../../Components/SharedComponent/SectionHeading'
import Userdata from '../../../../Hooks/userdata'
import Productcard from '../../../../Components/SharedComponent/Productcard'

const Populerheadingsection = () => {
  const { categorys, product } = Userdata()
  const [categoryId, setCategoryId] = useState(null)

  const handleCategoryId = (id) => {
    setCategoryId(id)
  }

  const filterproduct = categoryId
    ? product.filter((p) => p.categoryId === categoryId)
    : product

  return (
    <div className="mx-auto container px-6 sm:px-12 lg:px-24 py-12 text-center">
      {/* ==== Section Heading + Category Combined ==== */}
      <div className="mb-12 flex items-center justify-between container px-25">
        {/* Heading */}
        <SectionHeading
          Heading="Popular"
          colorHeading="Products"
          descrition="Shop online for new arrivals and get free shipping!"
        />

        {/* Category List */}
        <div className="flex justify-center flex-wrap gap-8 mt-6">
          {categorys.map((category) => (
            <button
              key={category?.id}
              onClick={() => handleCategoryId(category?.id)}
              className={`capitalize text-base font-medium transition-all duration-200 ${
                categoryId === category?.id
                  ? 'text-green-500 underline underline-offset-4 font-semibold'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              {category?.name}
            </button>
          ))}
        </div>
      </div>
      {/* ==== Product Cards ==== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20 justify-items-center">
        {filterproduct
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 10)
          .map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </div>

      <div className="flex justify-center mt-4 cursor-pointer text-bold text-white-">
        <div>
          <Link to="/ShopNow">
            <div className="flex justify-center bgp  items-center px-5 py-4 rounded-md w-74 gap-3">
              <BiSolidCategory />
              <button>View All product</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Populerheadingsection
