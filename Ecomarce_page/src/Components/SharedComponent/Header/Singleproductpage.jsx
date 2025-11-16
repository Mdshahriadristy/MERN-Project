import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router'
import Userdata from '../../../Hooks/userdata'
import Footer from '../Footer/Footer'
import SectionHeading from '../SectionHeading'
import Productcard from '../Productcard'

const Singleproductpage = () => {
  const { id } = useParams()
  const { product } = Userdata()

  const findProduct = product.find((p) => p.id == id)
  const [quantity, setQuantity] = useState(1)

  // ✅ Handle quantity changes
  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1)
  }

  if (!findProduct) {
    return <p className="text-center mt-10">Product not found</p>
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-10">
        {/* 🖼️ Product Image */}
        <div className="w-full md:w-[400px] h-[400px] flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-2xl shadow-md"
            src={findProduct.image}
            alt={findProduct.name}
          />
        </div>

        {/* 📄 Product Info */}
        <div className="flex flex-col gap-4 max-w-xl">
          <p className="text-sm text-gray-50 uppercase tracking-wide">
            {findProduct.categoryName}
          </p>

          <h3 className="text-3xl font-bold text-gray-50">
            {findProduct.name}
          </h3>

          {/* ⭐ Ratings */}
          <div className="flex items-center gap-2 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-400 text-sm">
              ({findProduct.ratings} ratings)
            </span>
          </div>

          {/* 💰 Price Section */}
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold text-green-500">
              ৳{findProduct.price}
            </p>
            <p className="text-gray-400 line-through">৳{findProduct.mrp}</p>
            <p className="text-red-500 font-semibold">
              {findProduct.discount}% OFF
            </p>
          </div>

          {/* 📦 Other Info */}
          <div className="text-gray-50 text-sm mt-2 space-y-1">
            <p>
              <span className="font-semibold">SKU:</span> {findProduct.sku}
            </p>
            <p>
              <span className="font-semibold">Stock:</span> {findProduct.stock}
            </p>
            <p>
              <span className="font-semibold">Closure:</span>{' '}
              {findProduct.closure}
            </p>
            <p>
              <span className="font-semibold">Width:</span> {findProduct.width}
            </p>
            <p>
              <span className="font-semibold">Outer Material:</span>{' '}
              {findProduct.outerMaterial}
            </p>
            <p>
              <span className="font-semibold">Sole:</span> {findProduct.sole}
            </p>
          </div>

          {/* 📏 Size Options */}
          <div className="mt-4">
            <p className="font-semibold text-gray-50 mb-2">Available Sizes:</p>
            <div className="flex gap-2 flex-wrap">
              {findProduct.weightOptions?.map((size, index) => (
                <button
                  key={index}
                  className="border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-500 transition-all"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* 📝 Description */}
          <div className="mt-4">
            <p className="font-semibold text-gray-50 mb-1">Description:</p>
            <p className="text-gray-400">{findProduct.description}</p>
          </div>

          {/* 🔢 Quantity Selector */}
          <div className="flex items-center gap-4 mt-6">
            <p className="text-gray-50 font-semibold">Quantity:</p>
            <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
              <button
                onClick={handleDecrease}
                className="px-4 py-1 bg-gray-700 text-white text-lg hover:bg-gray-600 transition-all"
              >
                -
              </button>
              <span className="px-5 py-1 bg-gray-800 text-white">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="px-4 py-1 bg-gray-700 text-white text-lg hover:bg-gray-600 transition-all"
              >
                +
              </button>
            </div>
          </div>

          {/* 🛒 Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-24">
          <SectionHeading
            heading={'Top Rated'}
            colorHeading={'Seleing Products'}
            descrition={'High-quality denim jeans for men with a comfortable'}
          ></SectionHeading>

          <div className="grid grid-cols-5 my-12 gap-20">
            {product.slice(0, 5).map((p) => (
              <Productcard product={p} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Singleproductpage
