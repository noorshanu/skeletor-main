import React from 'react'

const HowToBuy = () => {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="grid sm:grid-cols-12 px-5 gap-y-10 place-items-center place-content-center">
        <div className="sm:col-span-8 flex items-center justify-start w-full relative h-auto">
          <div className="font-thunder text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold">
            <h1 className="bg-gradient-to-r text-clip text-transparent bg-clip-text from-[#FFFFFF] via-[#D852E5] to-[#B020FF]">
              HOW
            </h1>
            <h1 className="bg-gradient-to-r text-clip text-transparent bg-clip-text from-[#FFFFFF] via-[#D852E5] to-[#B020FF]">
              {' '}
              TO BUY
            </h1>
          </div>
          <img className="w-auto ml-5 h-full absolute top-0 right-[20%]" src="/how-to-buy-shapes.svg" />
        </div>
        <div className="sm:col-span-4 text-white font-outfit sm:px-5">
          Welcome to KekAI, the ultimate platform that combines the power of
          memes and artificial intelligence to revolutionize your crypto trading
          journey. Get ready to embrace the fun, excitement, and cutting-edge
          technology tha.
        </div>
      </div>
    </div>
  )
}

export default HowToBuy
