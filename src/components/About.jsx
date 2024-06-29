import React from "react";

function About() {
  return (
    <div className="w-full px-[3.375rem] py-[6.063rem] font-['NeueMontreal'] text-[#212121] bg-[#CDEA68] rounded-2xl">
      <h1 className="relative text-[3.313rem] leading-[3.313rem] w-[90%]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to
        <span
          className="inline-block 
          relative 
          cursor-pointer           
          before:content-[''] 
          before:absolute 
          before:-bottom-[0.1rem] 
          before:left-0 
          before:w-0 
          before:h-[3px]
          before:duration-500 
          before:bg-[#212121]
          hover:before:w-full
          ml-3"
        >
          raise funds
        </span>
        ,
        <span
          className="inline-block 
          relative 
          cursor-pointer           
          before:content-[''] 
          before:absolute 
          before:-bottom-[0.1rem] 
          before:left-0 
          before:w-0 
          before:h-[3px]
          before:duration-500 
          before:bg-[#212121]
          hover:before:w-full
          ml-3"
        >
          sell products
        </span>
        ,
        <span
          className="inline-block 
          relative 
          cursor-pointer           
          before:content-[''] 
          before:absolute 
          before:-bottom-[0.1rem] 
          before:left-0 
          before:w-0 
          before:h-[3px]
          before:duration-500 
          before:bg-[#212121]
          hover:before:w-full"
        >
          explain complex ideas
        </span>
        , and
        <span
          className="inline-block 
          relative 
          cursor-pointer           
          before:content-[''] 
          before:absolute 
          before:-bottom-[0.1rem] 
          before:left-0 
          before:w-0 
          before:h-[3px]
          before:duration-500 
          before:bg-[#212121]
          hover:before:w-full
          ml-3"
        >
          hire great people
        </span>
        .
      </h1>
      <div className="w-full flex border-t-[2px] pt-5 pb-16 mt-16 border-[#A9C059]">
        <div className="w-1/2">What you can expect:</div>
        <div className="w-1/2 flex gap-[12rem]">
          <div className="w-1/2">
            <div className="pb-8">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </div>
            <div>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </div>
          </div>
          <div className="w-1/2 mt-24">
            <h6 className="mb-5">S:</h6>
            <a className="block" href="">
              Instagram
            </a>
            <a className="block" href="">
              Behance
            </a>
            <a className="block" href="">
              Facebook
            </a>
            <a className="block" href="">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex border-t-[2px] pt-10 mt-12 border-[#A9C059]">
        <div className="w-1/2">
          <h1 className="text-[3.58vw]">Our approach:</h1>
          <button className="flex gap-10 items-center px-[1.8rem] py-[1rem] bg-[#212121] mt-3 rounded-full text-white text-sm uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[74vh] mt-2 rounded-xl overflow-hidden">
          <img
            className="object-cover bg-center w-full h-full block"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
