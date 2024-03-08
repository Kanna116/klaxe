import React from 'react'
import { techStackIcons } from '../constants'

function TechStackbar() {
    return (
        <div className='w-screen h-fit py-5 lg:px-10 px-3 flex items-center mb-3 flex-wrap gap-x-[10%] md:gap-x-[15%] gap-y-5 lg:gap-x-[0%] lg:gap-y-0 justify-between border-secondary border-y-[1px]  -mx-[24px] md:-mx-[64px] lg:-mx-[96px]'>
            {
                techStackIcons.map((item, index) => <span
                    key={index}
                    title={item.title}
                    className='text-2xl text-primary'
                >
                    {item.icon}
                </span>)
            }
        </div>
    )
}

export default TechStackbar