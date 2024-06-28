import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-24 rounded-2xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 10,
          }}
          className="text-[28vw] leading-none font-['FoundersGrotesk'] uppercase text-white pr-10 -mt-20 -mb-10 font-light"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 10,
          }}
          className="text-[28vw] leading-none font-['FoundersGrotesk'] uppercase text-white pr-10 -mt-20 -mb-10 font-light"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
