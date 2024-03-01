import { myPics } from '@/pages/constants'
import Image from 'next/image'
import React from 'react'

const MyPics = () => {
    return (
        <div className='w-full h-screen flex flex-wrap items-start justify-start gap-0'>
            {
                myPics.map((item, index) => {
                    return (
                        <div className='w-1/3 h-1/2 shrink-0 flex items-center justify-center p-20'>
                            <Image
                            src={item.image}
                            width={500}
                            height={500}
                            alt={`Murali Krishna photo ${item.id}`}
                            draggable={false}
                            className='w-full h-full object-contain object-center'
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyPics