
import { techStackIcons } from '@/pages/constants'
import React from 'react'

const MyTech = () => {
    return (
        <div className='w-full h-fit py-20 flex flex-wrap items-center lg:justify-center md:justify-center justify-between gap-5 lg:px-32 md:px-12 px-0'>
            {
                techStackIcons.map((item, index) => {
                    return (
                        <div key={index} className='w-fit h-fit bg-white lg:px-10 md:px-7 px-3 lg:py-5 md:py-4 py-2 rounded-[3px] flex items-center justify-center gap-3'>
                            <span className='mix-blend-difference lg:text-xl md:text-lg text-sm'>{item.icon}</span>
                            <h4 className='mix-blend-difference lg:text-xl md:text-lg text-sm'>{item.title}</h4>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MyTech