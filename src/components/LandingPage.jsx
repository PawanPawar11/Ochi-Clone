import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen pt-1'>
        <div className="textstructure mt-40 px-20">
            {["We Create", "Eye-Opening", "Presentation"].map((item, index)=> {
                return <div className="masker">
                            <h1 className="uppercase text-[8.3rem] leading-[6.25rem] font-semibold text-neutral-800 font-['FoundersGrotesk']">{item}</h1>
                        </div>
            })}
        </div>
        <div className="border-t-2 border-zinc-400"></div>
    </div>
  )
}

export default LandingPage