import React from 'react'
import image1 from '../../../assets/images/12.jpg'
import image2 from '../../../assets/images/13.jpg'
import image3 from '../../../assets/images/14.jpg'
import { Link } from 'react-router'

const Collection = () => {
  return (
    <div className="container px-24 mx-auto  flex justify-between gap-4 my-24">
      <div
        className="  w-107 flex flex-col justify-end px-8 py-4  rounded-md items-end"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="text-end">
          <h3 className="text-white text-4xl font-semibold mb-4">
            Women's <br />
            Collection
          </h3>
          <Link to="ShopNow">
            <button className="bgp font-semibold px-6 py-2 rounded-md hover:opacity-90 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div
        className="  w-107 flex flex-col justify-end px-8 py-4  rounded-md items-end"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="text-end">
          <h3 className="text-white text-4xl font-semibold mb-4">
            Women's <br />
            Collection
          </h3>
          <Link to="ShopNow">
            <button className="bgp font-semibold px-6 py-2 rounded-md hover:opacity-90 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div
        className=" w-107  flex flex-col justify-end px-8 py-4  rounded-md items-end"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="text-end">
          <h3 className="text-white text-4xl font-semibold mb-4">
            Men's <br />
            Collection
          </h3>
          <Link to="ShopNow">
            <button className="bgp font-semibold px-6 py-2 rounded-md hover:opacity-90 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Collection
