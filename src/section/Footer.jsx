import React from 'react'
const Footer = () => {
  return (
    <div className="footer py-8  relative ">
      <div className="side-green"></div>
      <div className="mx-auto  max-w-7xl px-4">
        <div className="grid  grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-16">
          <div className="flex items-center md:justify-end md:col-span-4">
            <div className={'flex pr-5 items-center'}>
              <img src="/logo2.svg" alt="" className={``} />
              <div>
                <h1 className={'text-white text-5xl font-bold font-gunk ml-3'}>
                  The Age of{' '}
                </h1>
                <h1 className={'text-white text-5xl font-bold font-gunk ml-3'}>
                  {' '}
                  Skeletor
                </h1>
              </div>
            </div>
            <img src="/divider.png" className="h-full w-1" alt="" />
          </div>
          <div className="md:col-span-4  py-6 flex justify-between">
            <div className="flex-1">
              <h1 className={`font-monument text-white font-medium`}>PAGES</h1>
              <div className="flex justify-between mt-5">
                <ul className="text-white font-red-hat opacity-[0.57] font-light text-base space-y-4">
                  <li className={`cursor-pointer `}>Home</li>
                  <li className={`cursor-pointer `}>Mission</li>
                  <li className={`cursor-pointer `}>About Us</li>
                </ul>
              </div>
            </div>
            <div className="ml-12 flex-1">
              <h1 className={`font-monument text-white font-medium`}></h1>
              <div className="flex mt-5">
                <ul className="text-white font-red-hat opacity-[0.57] font-light text-base space-y-4">
                  <li className={`cursor-pointer `}>Features</li>
                  <li className={`cursor-pointer `}>NFTs</li>
                  <li className={`cursor-pointer `}>Mobile</li>
                </ul>
              </div>
            </div>
            <div className="ml-12 flex-1">
              <h1 className={`font-monument text-white font-medium`}>
                SOCIALS
              </h1>
              <div className="flex mt-5">
                <ul className="text-white font-red-hat opacity-[0.57] font-light text-base space-y-4">
                  <li className={`flex gap-2 items-center cursor-pointer `}>
                    <img src="/social-media/twitter-white" /> Twitter
                  </li>
                  <li className={`flex gap-2 items-center cursor-pointer `}>
                    <img src="/social-media/telegram-white" /> Telegram
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 py-6 space-y-5">
            <h1 className={`text-white font-monument `}>Mobile App</h1>
            <p className={'text-white opacity-50 font-barlow max-w-[180px]'}>
              Sign up for the waiting list to get notified when we will release
              the BETA version!
            </p>
            <div
              className={`bg-[#0F0F11] w-full h-11 p-2 pr-1 pl-4 flex justify-between items-center max-w-xs rounded-lg`}
            >
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none w-[70%] text-white text-sm"
              />
              <button className="w-[30%] bg-white text-black font-barlow font-medium text-sm py-2 px-3 cursor-pointer rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <img
          src="/line.svg"
          className="w-[100%] my-12 h-auto mx-auto b"
          alt=""
        />
        <p
          className={`font-red-hat text-white opacity-50 mx-auto text-center md:text-end text-sm `}
        >
          Copyright @ 2023. All rights recieved
        </p>
      </div>
    </div>
  )
}

export default Footer
