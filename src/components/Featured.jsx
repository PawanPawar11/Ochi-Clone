import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-[6.875rem] font-NeueMontreal text-[#212121]">
      <div className="w-full px-[3.5rem] border-b-[1.5px] border-[#B9B9B9] pb-[2.5rem]">
        <h1 className="text-[3.5859vw] ">Featured projects</h1>
      </div>
      <div className="cards w-full flex gap-3.5 mt-10 px-[3.2rem]">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer relative w-1/2 h-[80vh]"
        >
          <h1 className="font-FoundersGrotesk absolute flex overflow-hidden z-[9] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] leading-none text-[#CDEA68]">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover bg-center"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer relative w-1/2 h-[80vh]"
        >
          <h1 className="font-FoundersGrotesk absolute flex overflow-hidden z-[9] right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-[10rem] leading-none text-[#CDEA68]">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover bg-center"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
