import React from 'react'
import Marquee from 'react-fast-marquee'

const Features = () => {
  return (
    <div className="mt-20">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="relative">
          <div className="flex h-full flex-col justify-end pb-20 px-4 max-w-lg mx-auto ">
            <img src="/design.svg" className="h-[50px] w-auto mb-32" />
            <h1 className="font-thunder text-6xl mb-7 text-start font-bold bg-gradient-to-r text-clip text-transparent bg-clip-text from-[#FFFFFF] via-[#D852E5] to-[#B020FF]">
              FEATURED ON
            </h1>
            <p className="text-white">
              DeeLance brings together employers and freelancers for work and
              discussion in the virtual world of the Metaverse. Through the
              creation of innovative and unique digital worlds, commercial
              activities such as freelancer marketplaces will become even more
              efficient and useful.
            </p>
          </div>
          <img
            src="/features-bg.svg"
            className="absolute top-0 right-0 bottom-0"
          />
        </div>
        <div>
          {/* <Marquee
            autoFill
            direction="up"
            className="h-auto w-[90vw] sm:w-[40vw] marquee"
          > */}
            <img src="/features.svg" className="h-auto w-[100vw] sm:w-[50vw]" />
          {/* </Marquee> */}
        </div>
      </div>
    </div>
  )
}

export default Features
