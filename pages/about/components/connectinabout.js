import Link from 'next/link'
import React from 'react'

const ConnectInAbout = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center gap-10 flex-col sticky top-0'>
      <h1 className='lg:text-6xl md:text-4xl text-3xl  text-center'>Want to Know More <br /> About Me</h1>
      <div className='flex gap-5 items-center'>
        <Link href={`/contact`}>
          <button className='cursor-pointer text-light-secondary dark:text-dark-secondary bg-light-secondary dark:bg-dark-secondary px-[30px] py-[10px] rounded-[3px] text-base font-semibold'>Connect</button>
        </Link>
        <button className='cursor-pointer text-light-primary dark:text-dark-primary border-light-secondary dark:border-dark-secondary border-[1px] px-[30px] py-[10px] rounded-[3px] text-base font-semibold'>Mail</button>
      </div>
    </div>
  )
}

export default ConnectInAbout