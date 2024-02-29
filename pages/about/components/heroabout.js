import { heroAbout } from '@/pages/constants'
import Image from 'next/image'
import React from 'react'

const HeroAbout = () => {
    return (
        <div className='w-full h-fit py-16 mt-[60px] flex flex-col lg:flex-row md:flex-row lg:items-center items-center lg:justify-between md:justify-between justify-start gap-5 lg:gap-20 md:gap-20'>
            <div className='lg:w-[30vw] md:w-[30vw] w-[80vw] aspect-square rounded-full overflow-hidden shrink-0'>
                <Image
                    src={"/images/about/hero-about-image.jpg"}
                    width={1000}
                    height={1000}
                    priority
                    alt='image of Murali Krishna Sake'
                    className='w-full h-full object-center object-cover'
                />
            </div>

            <div className='w-full  h-full flex flex-col items-start justify-between gap-5'>
                <h1 className='text-3xl font-bold'>About Me</h1>
                <h4 className='w-full lg:text-2xl md:text-xl text-base font-normal'>{heroAbout.desc}</h4>
                <a href={heroAbout.link}><button>Support</button></a>
            </div>

        </div>
    )
}

export default HeroAbout