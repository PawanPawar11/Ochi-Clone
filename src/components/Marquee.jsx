import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-24 rounded-2xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
            <h1 className="text-[28vw] leading-none font-['FoundersGrotesk'] uppercase text-white -mt-20 -mb-10 font-light">We are ochi</h1>
            <h1 className="text-[28vw] leading-none font-['FoundersGrotesk'] uppercase text-white -mt-20 -mb-10 font-light">We are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee