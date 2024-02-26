import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full h-screen relative'>
            <div className="front w-full h-full pt-[60px] flex flex-col items-center justify-center lg:gap-6 gap-2">
                <h4 className='font-semibold text-[#ffffff] text-xs lg:text-3xl'>Hello, I am Murali Krishna Sake  ( Klaxe ). And I</h4>
                <h1 className='lg:text-6xl md:text-4xl text-xl font-bold capitalize'>Navigate The Intersection of</h1>
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold capitalize'>Design & Functionality</h1>
                <h4 className='font-semibold text-[#ffffff] text-xs lg:text-xl'>"Code with precision design with passion"</h4>
                <button className='lg:px-[50px] px-[20px] lg:py-[15px] py-[10px] bg-white text-black text-xs lg:text-xl mt-5'>Connect</button>
            </div>
            <div className="back absolute top-0 left-1/2 -translate-x-1/2 bg-blue-200 h-screen w-screen -z-[1]">
                <video src=""></video>
            </div>
        </div>
    )
}

export default HeroSection