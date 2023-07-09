import React from 'react'

const Roadmap = () => {
  let roadmapCards = [
    {
      label: 'Phase 1',
      className: 'rotate-[7.351deg]',
      items: [
        'Concept Creation',
        'Research and Analysis',
        'Website Creation',
        '',
        'Social Media Creation',
        'Tokenomics Creation',
      ],
    },
    {
      label: 'Phase 2',
      className: 'rotate-[-7.351deg]',
      items: [
        'Audit 1',
        'Creation of Sale on Pinksales',
        'Initial Marketing Starts',
        '',
        'Press & Outdoor',
        'Marketing  Dex Listing',
        'CMC & CG Listing',
      ],
    },
    {
      label: 'Phase 3',
      className: 'rotate-[9.115deg]',
      items: [
        'Initial CEX Lisiting',
        'Beta Platform live',
        'Marketing Push',
        '',
        'Success Party',
        'Second CEX Lisiting',
      ],
    },
    {
      label: 'Phase 4',
      className: 'rotate-[-4.975deg]',
      items: [
        'Launch of Platform + Ai Smart Wallet',
        'Main Stream Marketing Push',
        '3rd CEX Lisiting',
        '',
        'Stunt Marketing Events',
      ],
    },
  ]
  return (
    <div className="min-h-screen relative">
      <img className="mx-auto mt-28 mb-40 " src="/text/ROADMAP.svg" />
      <div className="grid lg:grid-cols-4 place-items-center place-content-center px-10 sm:grid-cols-2 max-w-6xl mx-auto  z-40 gap-x-10 gap-y-8">
        {roadmapCards.map((card) => {
          return (
            <div
              className={`bg-white bg-opacity-[0.06] max-w-[260px] pl-12 sm:pl-8 pr-4  h-fit backdrop-filter backdrop-blur-md  z-40 rounded-full py-10   text-white ${card.className}`}
            >
              <h1 className="text-[#D280FF] font-bold text-xl mt-5 mb-3">
                {card.label}
              </h1>
              <ol className="list-disc list-outside pl-4 space-y-2 mb-8">
                {card.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          )
        })}
      </div>
      <img
        src="/roadmap-line.svg"
        className="absolute bottom-0 right-0 left-0 h-auto w-auto z-0 mt-40  rotate-90 sm:rotate-0"
      />
    </div>
  )
}

export default Roadmap
