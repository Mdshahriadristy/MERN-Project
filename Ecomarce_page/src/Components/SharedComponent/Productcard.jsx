import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router'

const Productcard = ({ product }) => {
  return (
    <Link to={`/ShopNow/${product.id}`}>
      <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center w-56 flex-wrap">
        <div className="w-full h-36 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mt-3 space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-gray-500">
            {product.categoryName}
          </p>
          <h3 className="text-sm font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2">
            {product.description}
          </p>

          <div className="flex justify-center gap-0.5 text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={12} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-1">
            <span className="text-base font-bold text-green-600">
              ${product.price}
            </span>
            <span className="line-through text-gray-400 text-xs">
              ${product.mrp}
            </span>
          </div>

          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-lg text-xs font-medium transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Productcard
