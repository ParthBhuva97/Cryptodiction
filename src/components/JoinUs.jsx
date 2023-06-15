import React from 'react'

const JoinUs = () => {
  return (
    <div className="relative w-full lg:px-52 md:px-24 h-[500px] bg-[#d1495b] bg-[url(/download.svg)]  flex items-start justify-center flex-col">
      <div className="absolute z-0 top-0 left-0 opacity-75 w-full h-full bg-[#d1495b]"></div>
      <div className="absolute z-1 top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-5">
      <h1 className="font-Monoton text-[50px]">Join US</h1>
      <p className="font-Zilla text-md px-6 lg:px-0">Take control of your crypto destiny. Embrace the future and become part of our community.</p>
      <button className="bg-[#003d5b] p-3 font-Zilla text-white mt-5">Sign Up Now</button>
      </div>
    </div>
  )
}

export default JoinUs