import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";
import { socialIcons } from '../constants';

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <div className='py-5 gap-4 w-full border-t-[2px] border-white flex flex-col lg:flex-row md:flex-row items-center justify-between'>
            <div className='h-full flex flex-col lg:items-start md:items-start items-center justify-center gap-2'>
                <h4 className='font-normal text-base lg:text-start md:text-start text-center'>Designed and Developed by Murali Krishna Sake</h4>
                <p className='flex items-center gap-2 font-thin text-sm'><span><AiOutlineCopyright /></span>{year} all rights reserved</p>
            </div>

            <div className='h-full w-fit flex items-center justify-end gap-7 '>
                {
                    socialIcons.map((item, index) => {
                        return (
                            <a key={index} href={item.link} target='_blank' className='hover:scale-[1.5] duration-150'>
                                <span className='text-2xl'>{item.icon}</span>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer