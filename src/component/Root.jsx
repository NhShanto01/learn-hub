import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='max-w-6xl mx-auto'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root