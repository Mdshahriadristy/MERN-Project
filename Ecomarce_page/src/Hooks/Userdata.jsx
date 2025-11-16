import React, { useEffect, useState } from 'react'

const Userdata = () => {
  const [categorys, setcategory] = useState([])
  const [product, setProducts] = useState([])

  useEffect(() => {
    fetch('/Category.json')
      .then((res) => res.json())
      .then((data) => setcategory(data))
  }, [])

  useEffect(() => {
    fetch('/product.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return { categorys, product }
}

export default Userdata
