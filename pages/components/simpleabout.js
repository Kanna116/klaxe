import React from 'react'
import { simpleAbout } from '../constants'

function SimpleAbout() {
    return (
        <div className='w-full flex items-center justify-center flex-col gap-5 py-20'>
            <p className='lg:text-3xl text-xl lg:font-medium font-normal lg:w-4/5 w-full'>{simpleAbout.text}</p>
            <button className='lg:px-[50px] px-[20px] lg:py-[15px] py-[10px] bg-white text-black text-xs lg:text-xl mt-5'>More</button>
        </div>
    )
}

export default SimpleAbout