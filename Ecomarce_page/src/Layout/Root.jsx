import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/SharedComponent/Header/Header'
import TopHeader from '../Components/SharedComponent/Header/TopHeader'

const Root = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Outlet />

    </div>
  )
}

export default Root
