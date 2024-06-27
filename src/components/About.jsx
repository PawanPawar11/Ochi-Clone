import React from "react";

function About() {
  return (
    <div className="w-full px-[3.375rem] py-[6.063rem] font-['NeueMontreal'] bg-[#CDEA68] rounded-2xl">
      <h1 className="text-[3.313rem] leading-[3.313rem]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex border-t-[2px] pt-10 mt-20 border-[#A9C059]">
        <div className="w-1/2">
          <h1 className="text-[3.58vw]">Our approach:</h1>
          <button className="flex gap-10 items-center px-[1.8rem] py-[1rem] bg-[#212121] mt-3 rounded-full text-white text-sm uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[74vh] rounded-xl overflow-hidden">
          <img
            className="object-cover w-full h-full block"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
