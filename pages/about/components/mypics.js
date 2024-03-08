import { myPics } from '@/pages/constants'
import Image from 'next/image'
import React from 'react'

const MyPics = () => {
    return (
        <div className='w-full lg:h-screen md:h-screen h-fit flex flex-wrap items-start justify-start lg:gap-0 md:gap-0 gap-3 lg:flex-row md:flex-row flex-col my-10'>
            {
                myPics.map((item, index) => {
                    return (
                        <div key={index} className='lg:w-1/3 md:w-1/3 w-full lg:h-1/2 md:h-1/2 h-fit shrink-0 flex items-center justify-center lg:p-14 md:p-6 p-5 '>
                            <Image
                                src={item.image}
                                width={500}
                                height={500}
                                alt={`Murali Krishna photo ${item.id}`}
                                draggable={false}
                                className='w-full h-full object-contain object-center drop-shadow-2xl'
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyPics