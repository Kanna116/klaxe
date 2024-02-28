import React from 'react'
import { simpleAbout } from '../constants'
import { FiArrowUpRight } from "react-icons/fi";

function SimpleAbout() {
    return (
        <div className='w-full flex items-center justify-center flex-col gap-5 py-20'>
            <p className='lg:text-3xl text-xl lg:font-medium font-normal lg:w-4/5 w-full'>{simpleAbout.text}</p>
            <button className='lg:px-[30px] px-[20px] lg:py-[10px] py-[10px] rounded-[3px] bg-white text-black font-semibold text-xs lg:text-xl mt-5 flex gap-2 items-center'>More <span className='text-2xl'><FiArrowUpRight /></span></button>
        </div>
    )
}

export default SimpleAbout