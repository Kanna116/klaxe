import React from 'react'
import { heroText } from '../constants'

const HeroSection = () => {


    return (
        <div className='w-full h-screen relative'>
            <div className="front w-full h-full pt-[60px] flex flex-col items-center justify-center lg:gap-6 gap-2">
                <h4 className='font-semibold text-[#ffffff] text-xs lg:text-3xl'>{heroText[0]}</h4>
                <h1 className='lg:text-6xl md:text-4xl text-xl font-bold capitalize'>{heroText[1]}</h1>
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold capitalize'>{heroText[2]}</h1>
                <h4 className='font-semibold text-[#ffffff] text-xs lg:text-xl'>{heroText[3]}</h4>
                <button className='lg:px-[50px] px-[20px] lg:py-[15px] py-[10px] bg-white text-black text-xs lg:text-xl mt-5'>Connect</button>
            </div>
            <div className="back absolute top-0 left-1/2 -translate-x-1/2 h-screen w-screen -z-[1] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover'
                    src="/videos/hero-background-video1.webm">
                </video>
            </div>
        </div>
    )
}

export default HeroSection