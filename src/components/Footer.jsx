import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#d1495b] h-[150px] flex items-center justify-center flex-col gap-5">
        <div className="text-white w-[20%] flex items-center justify-around">
            <img src="/twitter.svg" alt="" height={30} width={30} />
            <img src="/insta.svg" alt="" height={30} width={30} />
            <img src="/fb.svg" alt="" height={30} width={30} />
            <img src="/twitch.svg" alt="" height={30} width={30} />
        </div>
        <div className="font-Zilla text-white">@2023 Future of Crypto</div>
    </div>
  )
}

export default Footer