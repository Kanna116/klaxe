import Link from 'next/link'
import React from 'react'

const Connect = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center gap-10 flex-col sticky top-0'>
            <h1 className='text-6xl text-center'>Let&apos;s Work Together</h1>
            <div className='flex gap-5 items-center'>
                <Link href={`/contact`} className='w-fit h-fit'>
                    <button className='cursor-pointer  text-black bg-white px-[30px] py-[10px] rounded-[3px] text-base font-semibold'>Connect</button>
                </Link>
                <button className='cursor-pointer text-white border-white border-[1px] px-[30px] py-[10px] rounded-[3px] text-base font-semibold'>Mail</button>
            </div>
        </div>
    )
}

export default Connect