import React from 'react'
import SectionHeading from '../../../Components/SharedComponent/SectionHeading'
import Userdata from '../../../Hooks/userdata'
import Productcard from '../../../Components/SharedComponent/Productcard'

const Newproduct = () => {
  const { product } = Userdata() // ✅ make sure it's correct

  return (
    <div className="my-10">
      <div className="container  px-24 mx-auto ">
        <SectionHeading
          descrition={"Don't wait. The time will never be just right."}
          Heading={'Day of '}
          colorHeading={'The deal'}
        />
      </div>

      <div className="container px-6 md:px-24 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-20 mt-8">
        {(product || []).slice(-10).map((p) => (
          <Productcard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Newproduct
