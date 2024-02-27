import React from 'react'
import { simpleAbout } from '../constants'

function SimpleAbout() {
    return (
        <div className='w-full flex items-center justify-center flex-col gap-5 py-20'>
            <p className='text-3xl font-medium w-4/5'>{simpleAbout}</p>
            <button className='lg:px-[50px] px-[20px] lg:py-[15px] py-[10px] bg-white text-black text-xs lg:text-xl mt-5'>More</button>
        </div>
    )
}

export default SimpleAbout