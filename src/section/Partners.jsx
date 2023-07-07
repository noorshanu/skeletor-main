import 'swiper/css'
import Marquee from 'react-fast-marquee'

function Partners() {
  let logos = [
    '/logos/eth.svg',
    'logos/logo2.svg',
    '/logos/logo3.svg',
    '/logos/dexTools.svg',
    '/logos/cmc.svg',
    '/logos/coin.svg',
    '/logos/binance.svg',
    '/logos/gate-io.svg',
  ]
  return (
    <div className="mt-20">
      <h1 className="font-thunder text-6xl sm:text-7xl mb-7 text-center font-bold bg-gradient-to-r text-clip text-transparent bg-clip-text from-[#FFFFFF] via-[#D852E5] to-[#B020FF]">
        Partners
      </h1>
      <div className="py-14 px-7  ">
        <Marquee direction="left">
          {logos.map((logo) => {
            return (
              <div className="w-full flex justify-center px-8">
                <div className="w-full flex justify-center">
                  <img src={logo} alt="" className="h-[50px]  sm:h-[60px] w-auto" />
                </div>
              </div>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default Partners
