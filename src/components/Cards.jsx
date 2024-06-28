import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] flex gap-4 items-center px-14">
      <div className="cardcontainer w-1/2 h-[60vh]">
        <div className="card relative flex items-center justify-center w-full h-full bg-[#004D43] rounded-xl">
          <img
            className="w-40"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-6 border-[1.5px] border-[#C9E767] px-3 py-1 text-[1rem] text-[#C9E767] rounded-3xl">
            &copy;2019-2020
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-4 w-1/2 h-[60vh]">
        <div className="card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute uppercase left-8 bottom-6 border-[1.5px] border-[#EDEDED] px-3 py-1 text-[1rem] text-[#F1F1F1] rounded-3xl">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute uppercase left-8 bottom-6 border-[1.5px] border-[#EDEDED] px-3 py-1 text-[1rem] text-[#F1F1F1] rounded-3xl">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
