import React from 'react'

const Hero = () => {
  return (
    <div className="relative z-20 flex h-[700px] md:h-[750px] flex-col items-center justify-center pb-12 sm:pb-16 lg:pb-32 xl:pb-48 xl:pt-60 2xl:pb-56">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <div className="tracking-tighter text-white">
              <h1 className="font-sans text-4xl sm:text-5xl md:text-8xl font-bold font-thunder">
                Join The Fastest
              </h1>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl font-bold font-thunder">
                Growing Marketplace
                Skeleton
                {/* <span className="relative">
                  <div className="bg-[#B020FF]  absolute rounded-lg  rotate-[5.1deg] z-0 inline text-black "><span className='rotate-[-5.1deg]'> Skeletor </span></div>
                
                </span> */}
              </h1>
            </div>
            <p className="mt-5 font-mabry max-w-xl mx-auto text-base font-normal text-white text-opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="mt-8 flex items-center justify-center space-x-3 sm:space-x-4">
              <button className="py-4 px-4 rounded-lg bg-black text-white hover:bg-white hover:bg-opacity-40 hover:backdrop-blur-lg">
                Join Now
              </button>
              <button className="py-4 px-4 rounded-lg bg-black text-white hover:bg-white hover:bg-opacity-40 hover:backdrop-blur-lg">
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
