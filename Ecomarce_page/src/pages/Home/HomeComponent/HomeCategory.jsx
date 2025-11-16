import Userdata from '../../../Hooks/userdata'

const HomeCategory = () => {
  const { categorys } = Userdata()

  return (
<div className="container mx-auto px-24">
  <div className="flex items-center gap-4">
    {categorys.map((category, index) => (
      <div
        key={index}
        className="flex flex-col text-center bg-gray-500 rounded-md px-12 py-4 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
      >
        <img
          className="w-16 h-16 transition-transform duration-300 hover:rotate-6"
          src={category.image}
          alt={category.name}
        />
        <div className="mt-2">
          <p className="text-xs text-gray-50">{category.name}</p>
          <p className="text-xs text-gray-50">items: {category.items}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default HomeCategory
