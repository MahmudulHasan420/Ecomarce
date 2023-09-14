import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'
import Searchber from './Searchber'
import Footer from './Footer '

const Routeleyout = () => {
  return (
    <>
      <Navber/>
      <Searchber/>
      <Outlet/>
      <Footer/>
    </>
  
  )
}

export default Routeleyout