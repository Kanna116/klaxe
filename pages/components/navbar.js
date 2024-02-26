import { useState } from 'react';
import Logo from './logo';

function Navbar() {

  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  return (
    <div className='w-full h-[50px] p-[10px] fixed top-[10px] left-0 lg:px-[96px] md:px-[64px] px-[24px] flex items-center justify-between z-[100]'>
      <div className='h-full w-fit shrink-0'>
        <Logo />
      </div>
      <ul className='lg:flex md:flex items-center gap-5 bg-zinc-100 w-fit text-black px-5 py-1 rounded text-xs hidden'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      {/* menu for mobile  */}

      <div className='w-10 aspect-square bg-white rounded-full flex items-center justify-evenly gap-[1px]  flex-col p-[10px] z-50 lg:hidden md:hidden '
        onClick={() => SetIsMenuOpen(prevValue => !prevValue)}
      >
        <div className='w-5 shrink-0 h-[2px] bg-black duration-200' style={{ transform: (isMenuOpen) ? `translate(0px,6px) rotate(-45deg)` : `translate(0px,0px) rotate(0deg)` }}></div>
        <div className='w-5 shrink-0 h-[2px] bg-black duration-300 origin-center ' style={{ transform: (isMenuOpen) ? `scaleX(0)` : `scaleX(1)` }}></div>
        <div className='w-5 shrink-0 h-[2px] bg-black duration-200' style={{ transform: (isMenuOpen) ? `translate(0px,-6px) rotate(45deg)` : `translate(0px,0px) rotate(0deg)` }}></div>
      </div>

      <ul
        className={`fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2  w-[300px] h-[300px] rounded-full flex items-center justify-center font-secondary flex-col gap-2 bg-secondary text-secondary duration-300 origin-center  ${isMenuOpen ? 'scale-100' : 'scale-0'} lg:hidden md:hidden `}>
        <li className='text-lg font-semibold uppercase'>Home</li>
        <li className='text-lg font-semibold uppercase'>About</li>
        <li className='text-lg font-semibold uppercase'>Projects</li>
        <li className='text-lg font-semibold uppercase'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar