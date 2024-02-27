import React from 'react'
import { techStackIcons } from '../constants'

function TechStackbar() {
    return (
        <div className='w-full h-fit py-5 px-3 flex items-center mb-3 justify-between border-[#fffffff] border-y-[1px]'>
            {
                techStackIcons.map((item, index) => <span
                 key={index}
                 className='text-2xl'
                 >{item}</span>)
            }
        </div>
    )
}

export default TechStackbar