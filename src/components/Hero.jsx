import React from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import CryptoChart from "./CryptoChart";

const Hero = () => {
  return (
    <div className="relative top-0 left-0 z-[-1] w-full h-screen bg-gradient-to-br from-blue-900 to-red-600">
      <div className="py-64 lg:px-0 px-6 lg:mx-52 md:mx-24"><h1 className="font-Monoton lg:text-[75px] text-3xl text-white md:leading-[80px]">Unleash your <br /> crypto power with <br /> us today.</h1></div>
    </div>
  );
};

export default Hero;
