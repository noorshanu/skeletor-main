import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center pb-12 sm:pb-16 lg:pb-32 xl:pb-48 xl:pt-60 2xl:pb-56">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <div className="tracking-tighter text-white">
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold">Join The Fastest</h1>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold ">
                Growing Marketplace Skeletor
              </h1>
            </div>
            <p className="mt-5 font-mabry max-w-xl mx-auto text-base font-normal text-white text-opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="mt-8 flex items-center justify-center space-x-3 sm:space-x-4">
              <button className="py-4 px-4 rounded-lg bg-black text-white">
                Join Now
              </button>
              <button className="py-4 px-4 rounded-lg bg-white bg-opacity-40 backdrop-blur-lg text-white">
                Read Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
