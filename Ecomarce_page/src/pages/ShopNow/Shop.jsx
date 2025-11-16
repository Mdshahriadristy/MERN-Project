import React, { useState } from 'react'
import Userdata from '../../Hooks/userdata'
import Productcard from '../../Components/SharedComponent/Productcard'
import Footer from '../../Components/SharedComponent/Footer/Footer'

const Shop = () => {
  const { product, categorys } = Userdata()
  const [categoryId, setCategoryId] = useState(null)
  const [width, setWidth] = useState(null)

  // 🔹 Handle category toggle
  const handleCategoryClick = (id) => {
    setCategoryId((prev) => (prev === id ? null : id))
  }

  // 🔹 Handle width toggle
  const handleWidthClick = (w) => {
    setWidth((prev) => (prev === w ? null : w))
  }

  // 🔹 Clear all filters
  const clearFilters = () => {
    setCategoryId(null)
    setWidth(null)
  }

  // 🔹 Filter products
  const filteredProducts = product.filter((p) => {
    const matchCategory = categoryId ? p.categoryId === categoryId : true
    const matchWidth = width ? p.width === width : true
    return matchCategory && matchWidth
  })

  // 🔹 Unique widths
  const widths = [...new Set(product.map((p) => p.width))]

  return (
    <div>
      <div className="container mx-auto px-24 sm:px-8 md:px-12 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Sidebar — Filters */}
          <div className="md:col-span-3">
            <div className="border border-gray-200 p-4 rounded-md shadow-sm">
              {/* Category Filter */}
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-3">
                Category
              </h2>
              <div className="space-y-3">
                {categorys.map((category) => (
                  <label
                    key={category.id}
                    className={`flex items-center gap-3 cursor-pointer hover:text-blue-600 ${
                      categoryId === category.id
                        ? 'text-blue-600 font-semibold'
                        : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={categoryId === category.id}
                      readOnly
                      onClick={() => handleCategoryClick(category.id)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span onClick={() => handleCategoryClick(category.id)}>
                      {category.name}
                    </span>
                  </label>
                ))}
              </div>

              {/* Width Filter */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-3">
                  Width
                </h2>
                <div className="space-y-3">
                  {widths.map((w) => (
                    <label
                      key={w}
                      className={`flex items-center gap-3 cursor-pointer hover:text-blue-600 ${
                        width === w ? 'text-blue-600 font-semibold' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={width === w}
                        readOnly
                        onClick={() => handleWidthClick(w)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span onClick={() => handleWidthClick(w)}>{w}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filter Button */}
              {(categoryId || width) && (
                <button
                  onClick={clearFilters}
                  className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full transition-all"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Right Side — Products */}
          <div className="md:col-span-9 gap-5">
            <h2 className="text-xl font-semibold mb-4">
              {categoryId || width ? 'Filtered Products' : 'All Products'}
            </h2>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-35">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <Productcard key={item.id} product={item} />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500 mt-10">
                  No products found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Shop
