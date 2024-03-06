import Link from 'next/link'
import React from 'react'

const Connect = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center gap-10 flex-col sticky top-0'>
            <h1 className='lg:text-6xl text-4xl text-center'>A Better Project <br />Makes The Best World</h1>
            <div className='flex gap-5 items-center'>
                <Link href={`/contact`}>
                    <button className='text-black bg-white px-[30px] py-[10px] rounded-[3px] text-base font-semibold'>Let&apos;s create</button>
                </Link>
            </div>
        </div>

    )
}

export default Connect