import React from 'react'
import banner1 from '../assets/banner2.png'

function Hero() {
  return (
    <div className="hero "> 
    {/* min-h-screen */}
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <img className='max-w-sm rounded-lg ' alt='banner'
      src={banner1}
    />
    <div>
      <h1 className="text-5xl font-bold p-8">Learn anywhere, anytime, Knowledge has no limits.</h1>
      <button className="btn btn-outline btn-info m-8 cursor-pointer">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero