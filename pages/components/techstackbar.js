import React from 'react'
import { techStackIcons } from '../constants'

function TechStackbar() {
    return (
        <div className='w-full h-fit py-5 px-3 flex items-center mb-3 justify-between border-[#fffffff] border-y-[1px]'>
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