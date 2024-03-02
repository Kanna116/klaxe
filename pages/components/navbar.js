import { useState } from 'react';
import Logo from './logo';
import { navitems } from '../constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {

  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const router = useRouter();


  return (
    <div className='w-full h-[50px] p-[10px] fixed top-[10px] left-0 lg:px-[96px] md:px-[64px] px-[24px] flex items-center justify-between z-[100]'>
      <div className='h-full w-fit shrink-0'>
        <Logo />
      </div>
      <ul className='lg:flex md:flex items-center  bg-zinc-100 w-fit text-black  rounded-sm text-xs hidden border-[0.01px] border-[#ffffff10]'>
        {
          navitems.map((item, index) => <Link key={index} href={item.link}><li className={`cursor-pointer hover:bg-black hover:text-white h-full py-1 px-4 duration-150 ease-in-out ${router.pathname === item.link ? 'bg-black' : 'bg-white'} ${router.pathname === item.link ? 'text-white' : 'text-black'}`}>{item.name}</li></Link>)
        }
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
        {
          navitems.map((item, index) => <Link key={index} href={item.link}><li className='cursor-pointer text-lg hover:font-extrabold font-semibold uppercase'>{item.name}</li></Link>)
        }
      </ul>
    </div>
  )
}

export default Navbar