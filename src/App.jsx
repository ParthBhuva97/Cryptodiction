import { useState } from 'react'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Info from './components/Info'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import CryptoChart from './components/CryptoChart'
import Predictions from './components/Predictions'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Community from './components/Community'

function App() {

  return (
    <>
    <div className='relative'>
      <div className='absolute top-0 w-full flex items-center justify-between bg-transparent opacity-20 h-full'>
        <div className='w-[1px] h-full bg-white'></div>
        <div className='w-[1px] h-full bg-white'></div>
        <div className='w-[1px] h-full bg-white'></div>
        <div className='w-[1px] h-full bg-white'></div>
        <div className='md:block hidden w-[1px] h-full bg-white'></div>
        <div className='md:block hidden w-[1px] h-full bg-white'></div>
        <div className='md:block hidden w-[1px] h-full bg-white'></div>
        <div className='md:block hidden w-[1px] h-full bg-white'></div>
      </div> 
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/charts' element={<CryptoChart/>}></Route>
      <Route exact path='/predict' element={<Predictions/>}></Route>
      <Route exact path='/community' element={<Community/>}></Route>
    </Routes> 
    </div>
    </>
  )
}

export default App
