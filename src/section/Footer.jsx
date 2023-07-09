import React from 'react'
import { RxDiscordLogo } from 'react-icons/rx'
import { LiaTelegramPlane } from 'react-icons/lia'
import { CiTwitter } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className="footer py-8  relative ">
      <div className="side-green"></div>
      <div className="mx-auto  max-w-7xl px-4">
        <div className="grid  grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6 md:gap-x-10 lg:gap-x-16">
          <div className="flex items-center sm:col-span-12 sm:justify-start md:justify-end md:col-span-4">
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
            <div className="h-[70%] w-[0.1px] bg-[#373745]" alt="" />
          </div>

          
          <div className="sm:col-span-7 md:col-span-4  py-6 flex w-full justify-between">
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
            <div className=" flex-1">
              <h1 className={`font-monument text-white font-medium invisible`}>
                .
              </h1>
              <div className="flex mt-5">
                <ul className="text-white font-red-hat opacity-[0.57] font-light text-base space-y-4">
                  <li className={`cursor-pointer `}>Features</li>
                  <li className={`cursor-pointer `}>NFTs</li>
                  <li className={`cursor-pointer `}>Mobile</li>
                </ul>
              </div>
            </div>
            <div className=" flex-1">
              <h1 className={`font-monument text-white font-medium`}>
                SOCIALS
              </h1>
              <div className="flex mt-5">
                <ul className="text-white font-red-hat opacity-[0.57]  text-base space-y-7">
                  <li
                    className={`flex gap-2 items-center font-light hover:font-medium text-gray-200 hover:text-white cursor-pointer `}
                  >
                    <CiTwitter className="text-gray-200 hover:text-white" />{' '}
                    Twitter
                  </li>
                  <li
                    className={`flex gap-2 items-center font-light hover:font-medium cursor-pointer text-gray-200 hover:text-white `}
                  >
                    <LiaTelegramPlane className="text-gray-200 hover:text-white" />{' '}
                    Telegram
                  </li>
                  <li
                    className={`flex gap-2 items-center font-light hover:font-medium cursor-pointer text-gray-200 hover:text-white `}
                  >
                    <RxDiscordLogo className="text-gray-200 hover:text-white" />{' '}
                    Discord
                  </li>
                </ul>
              </div>
            </div>
          </div>





          <div className="sm:col-span-5 md:col-span-4 py-6 space-y-5">
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
                className="bg-transparent border-none outline-none w-auto text-white text-sm"
              />
              <button className="w-fit bg-white text-black font-barlow font-medium text-sm py-2 px-3 cursor-pointer rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <img
          src="/line.svg"
          className="w-[100%] mb-10 mt-6 h-auto mx-auto b"
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
