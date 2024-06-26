import React from 'react';
import { PiArrowUp } from "react-icons/pi";


function LandingPage() {
  return (
    <div className='w-full h-screen pt-1'>
        <div className="textstructure mt-40 px-20">
            {["We Create", "Eye-Opening", "Presentation"].map((item, index)=> {
                return (
                    <div className="masker">
                        <div className="w-fit flex items-end overflow-hidden">
                            {index === 1 && (<div className="mr-[1vw] w-[9vw] rounded-md h-[5.8vw] relative bg-red-500"></div>)}
                            <h1 className="flex items-center uppercase text-[8.3rem] leading-[6.25rem] font-semibold text-neutral-800 font-['FoundersGrotesk']">{item}</h1>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="border-t-[1.5px] border-zinc-400 mt-20 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p className="font-['NeueMontreal'] text-neutral-800">{item}</p>
            ))}
            <div className="start flex items-center gap-2">
                <div className="px-4 py-0.5 border-[1.5px] border-neutral-800 rounded-full uppercase">Start the Project</div>
                <div className="w-8 h-8 flex items-center justify-center border-[1.5px] border-neutral-800 rounded-full">
                    <span className='rotate-[45deg] text-[1.2rem]'>
                        <PiArrowUp/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage