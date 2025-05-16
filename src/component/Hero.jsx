import React from 'react'
import banner1 from '../assets/banner1.jpg'

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img className='max-w-sm rounded-lg shadow-2xl' alt='banner'
      src={banner1}
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero