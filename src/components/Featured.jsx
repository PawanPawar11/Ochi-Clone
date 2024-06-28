import React from "react";

function Featured() {
  return (
    <div className="w-full py-[6.875rem] font-NeueMontreal text-[#212121]">
      <div className="w-full px-[3.5rem] border-b-[1.5px] border-[#B9B9B9] pb-[2.5rem]">
        <h1 className="text-[3.5859vw] ">Featured projects</h1>
      </div>
      <div className="cards w-full flex gap-3.5 mt-10 px-[3.2rem]">
        <div className="cardcontainer relative w-1/2 h-[80vh]">
          <h1 className="font-FoundersGrotesk absolute z-[9] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] leading-6 text-[#CDEA68]">
            {"FYDE".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover bg-center"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </div>
        <div className="cardcontainer relative w-1/2 h-[80vh]">
          <h1 className="font-FoundersGrotesk absolute z-[9] right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-[10rem] leading-6 text-[#CDEA68]">
            {"VISE".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover bg-center"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
