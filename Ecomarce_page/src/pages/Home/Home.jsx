import React from 'react'
import Hero from './HomeComponent/Hero'
import HomeCategory from './HomeComponent/HomeCategory'
import Populerheadingsection from './HomeComponent/Populerheading/populerheadingsection'
import LatestExclusive from './HomeComponent/LatestExclusive'
import Newproduct from './HomeComponent/Newproduct'
import Collection from './HomeComponent/Collection'
import Support from './Support'
import Footer from '../../Components/SharedComponent/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeCategory />
      <Populerheadingsection />
      <LatestExclusive />
      <Newproduct />
      <Collection />
      <Support />
      <Footer />
    </div>
  )
}

export default Home
