import React, { useState } from 'react'
import Logo from './logo'
import Image from 'next/image';

function Navbar() {

  const [isMenuOpen, SetIsMenuOpen] = useState(true);
  return (
    <div className='w-full h-[50px] p-[10px] fixed top-[10px] left-0 lg:px-[96px] md:px-[64px] px-[24px] flex items-center justify-between'>
      <div className='h-full w-fit'>
        <Logo />
      </div>
      <ul className='lg:flex md:flex items-center gap-5 bg-zinc-100 w-fit text-black px-5 py-1 rounded text-xs hidden'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      {/* menu for mobile  */}

      <div className='w-10 aspect-square bg-white rounded-full flex items-center justify-evenly gap-[1px]  flex-col p-[10px] z-50'
        onClick={() => SetIsMenuOpen(prevValue => !prevValue)}
      >
        <div className='w-5 shrink-0 h-[2px] bg-black duration-200' style={{ transform: (isMenuOpen) ? `translate(0px,6px) rotate(-45deg)` : `translate(0px,0px) rotate(0deg)` }}></div>
        <div className='w-5 shrink-0 h-[2px] bg-black duration-300 origin-center ' style={{ transform: (isMenuOpen) ? `scaleX(0)` : `scaleX(1)` }}></div>
        <div className='w-5 shrink-0 h-[2px] bg-black duration-200' style={{ transform: (isMenuOpen) ? `translate(0px,-6px) rotate(45deg)` : `translate(0px,0px) rotate(0deg)` }}></div>
      </div>


    </div>
  )
}

export default Navbar