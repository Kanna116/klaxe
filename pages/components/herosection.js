import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full h-screen'>
            <div className="front w-full h-full pt-[60px] flex flex-col items-center justify-center gap-6">
                <h4 className='font-semibold text-[#ffffff90] text-3xl'>Hello, I am Murali Krishna Sake  ( Klaxe ). And I</h4>
                <h1 className='text-7xl font-bold'>Navigate The Intersection of</h1>
                <h1 className='text-6xl font-semibold'>Design & Functionality</h1>
                <h4 className='font-semibold text-[#ffffff90] text-xl'>"Code with precision design with passion"</h4>
                <button className='px-[30px] py-[5px] bg-white text-black'>Connect</button>
            </div>
        </div>
    )
}

export default HeroSection