import React from 'react'
import Logo from './logo'

function Navbar() {
  return (
    <div className='w-full h-[60px] p-[10px] fixed top-[10px] left-0 lg:px-[96px] md:px-[64px] px-[24px] flex items-center justify-between'>
      <div className='h-full w-fit'>
        <Logo />
      </div>
      <ul className='lg:flex md:flex items-center gap-5 bg-zinc-100 w-fit text-black px-5 py-1 rounded text-xs hidden'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>


      

    </div>
  )
}

export default Navbar