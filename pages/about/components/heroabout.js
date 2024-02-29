import Image from 'next/image'
import React from 'react'

const HeroAbout = () => {
    return (
        <div className='w-full h-[70vh] bg-zinc-600  mt-[60px] flex items-center justify-evenly'>
            <div className='w-[30vw] aspect-square rounded-full overflow-hidden'>
                <Image
                    src={"/images/about/hero-about-image.jpg"}
                    width={1000}
                    height={1000}
                    priority
                    alt='image of Murali Krishna Sake'
                    className='w-full h-full object-center object-cover'
                />
            </div>

            <div className='w-1/2 h-full flex flex-col items-start gap-5'>
                <h4></h4>
            </div>

        </div>
    )
}

export default HeroAbout