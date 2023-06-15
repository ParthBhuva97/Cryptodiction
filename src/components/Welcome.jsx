import React from "react";

const Welcome = () => {
  return (
    <div className="relative w-full lg:px-52 md:px-24 px-6 h-[500px] bg-black bg-[url(/black-tick.svg)]  flex items-start justify-center flex-col">
      <div className="absolute z-0 top-0 left-0 opacity-50 w-full h-full bg-black"></div>
      <div className="absolute z-1">
      <h1 className="font-Zilla text-lg text-white flex items-center justify-start">
        Welcome
      </h1>
      <h1 className="font-Monoton md:text-[50px] mt-5 text-3xl text-yellow-400 md:leading-[50px]">
        Where wizards of <br /> the blockchain <br /> realm gather to <br />{" "}
        unveil untold <br /> secrets.
      </h1>
      </div>
    </div>
  );
};

export default Welcome;
