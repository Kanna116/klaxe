import React from 'react'
import { techStackIcons } from '../constants'

function TechStackbar() {
    return (
        <div className='w-full h-fit py-5 px-3 flex items-center mb-3 flex-wrap gap-[10%] gap-y-3 lg:gap-[0%] lg:gap-y-0 justify-between border-[#fffffff] border-y-[1px]'>
            {
                techStackIcons.map((item, index) => <span
                    key={index}
                    title={item.title}
                    className='text-2xl'
                >
                    {item.icon}
                </span>)
            }
        </div>
    )
}

export default TechStackbar