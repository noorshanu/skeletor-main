import React from 'react'

const HowToBuy = () => {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="grid sm:grid-cols-12 px-5 gap-y-10 place-items-center place-content-center">
        <div className="sm:col-span-7 flex items-center justify-between w-full relative h-auto">
          <div className="font-thunder z-40 text-[28vw] sm:text-[14vw] leading-[28vw] sm:leading-[14vw] 2xl:text-[10rem] 2xl:leading-[11rem] font-bold">
            <h1 className="bg-gradient-to-r text-clip text-transparent bg-clip-text from-[#FFFFFF] via-[#D852E5] to-[#B020FF]">
              HOW
            </h1>
            <h1 className="bg-gradient-to-r text-clip text-transparent bg-clip-text from-[#FFFFFF] via-[#D852E5] to-[#B020FF]">
              {' '}
              TO BUY
            </h1>
          </div>
          <img
            className="w-auto ml-5 h-full absolute top-0 right-[5%] z-0"
            src="/how-to-buy-shapes.svg"
          />
        </div>
        
        <div className="sm:col-span-5 flex sm:flex-row flex-col justify-between items-center">
        <div className="h-[0.3px] w-[70%] mx-auto sm:h-[120px] sm:w-[0.3px] bg-[#a3a1a1] mb-8  sm:mr-2">.</div>
          <p className="text-white font-outfit sm:px-5">
            Welcome to KekAI, the ultimate platform that combines the power of
            memes and artificial intelligence to revolutionize your crypto
            trading journey. Get ready to embrace the fun, excitement, and
            cutting-edge technology tha.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowToBuy
