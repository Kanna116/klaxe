import React from 'react'
import { simpleAbout } from '../constants'
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';

function SimpleAbout() {

    const { text, link } = simpleAbout

    return (
        <div className='w-full flex items-center justify-center flex-col gap-5 py-20'>
            <p className='lg:text-3xl text-xl lg:font-medium font-normal lg:w-4/5 w-full'>{text}</p>
            <Link href={link}
                className='w-fit h-fit'>
                <button className='lg:px-[30px] px-[20px] lg:py-[10px] py-[10px] rounded-[3px] bg-secondary text-secondary font-semibold text-xs lg:text-xl mt-5 flex gap-2 items-center'>More <span className='text-2xl'><FiArrowUpRight /></span></button>
            </Link>
        </div>
    )
}

export default SimpleAbout