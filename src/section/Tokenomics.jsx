import React from 'react'

const Tokenomics = () => {
  return (
    <div className="max-w-6xl mx-auto px-3">
      <h1 className="font-thunder text-white text-5xl font-bold text-center mb-10 mt-20">
        Tokenomics
      </h1>
      <div className='bg-[url("/public/tokenomics-bg.svg")] flex justify-center items-center   bg-cover rounded-3xl'>
        <img
          src="/tokenomics.svg"
          className="w-full sm:w-[85%] h-auto p-10 sm:py-20 sm:px-24"
        />
      </div>
    </div>
  )
}

export default Tokenomics
