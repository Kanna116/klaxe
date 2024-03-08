import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";
import { socialIcons } from '../constants';
import SocialIcon from './socialicon';

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <div className='py-5 gap-4 w-full border-t-[2px] border-light-secondary dark:border-dark-secondary flex flex-col lg:flex-row md:flex-row items-center justify-between z-auto sticky'>
            <div className='h-full flex flex-col lg:items-start md:items-start items-center justify-center gap-2'>
                <h4 className='font-medium text-base lg:text-start md:text-start text-center'>Designed and Developed by Murali Krishna Sake</h4>
                <p className='flex items-center gap-2 font-light text-sm'><span><AiOutlineCopyright /></span>{year} all rights reserved</p>
            </div>

            <div className='h-full lg:w-fit md:w-fit w-full flex items-center lg:justify-end md:justify-end justify-between lg:gap-7 md:gap-5 gap-3 '>
                {
                    socialIcons.map((item, index) => <SocialIcon key={index} {...item} />)
                }
            </div>
        </div>
    )
}

export default Footer