import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import CryptoChart from "./CryptoChart";

const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent mx-auto md:p-16 py-10 px-6 text-white font-Zilla text-lg">
    <div className="flex items-center justify-around ">
    <NavLink to='/'><div className="md:block hidden "><span className='text-red-400'>Crypto</span><span className='text-blue-200'>Diction</span></div></NavLink>
    <NavLink to="/charts"><div className="md:block hidden">Charts</div></NavLink>
    <NavLink to='/predict'><div className="md:block hidden">Prediction</div></NavLink>
    <NavLink to='/community'><div className="md:block hidden">Community</div></NavLink>
    </div>
    <div className="md:hidden flex items-center justify-between">
      <div>Brand</div>
      {toggle ? <div className="border border-white p-2 rounded" onClick={()=>{setToggle(!toggle)}}><AiOutlineClose/></div> : <div className="border border-white p-2 rounded" onClick={()=>{setToggle(!toggle)}}><AiOutlineMenu/></div>}
    </div>

    <div className='bg-white border border-black text-black my-2 p-5 transition-shadow duration-500 ' style={toggle ? {} : {position:"absolute",top:"-100px", left:"-500px",animationDuration:"500ms"}}>
      <div>Charts</div>
      <div>Predictions</div>
      <div>Community</div>
    </div>
  </nav>
  )
}

export default Navbar