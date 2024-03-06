import { socialIcons } from '@/pages/constants'
import React from 'react'
import { BsClipboard } from 'react-icons/bs'

const OtherSocialOptions = () => {
    return (
        <>
            <h1 className='mt-10 text-xl underline'>You have other ways You know</h1>
            <h4 className='text-2xl mt-2 font-semibold'>Socials</h4>
            <ul className='flex flex-col items-start mt-3 gap-3'>
                {
                    socialIcons.map((item, index) => {
                        return <a href={item.link} key={index} target='_blank' className='w-fit h-fit'>
                            <li className='flex items-center gap-3 text-xl cursor-pointer group font-thin'>
                                <span className='scale-0 group-hover:scale-[1] duration-300 '>{item.icon}</span>
                                <span className='-translate-x-8 group-hover:translate-x-0 duration-300'>{item.socialHandleName}</span>
                            </li>
                        </a>
                    })
                }
            </ul>
            <h4 className='text-2xl mt-5 font-semibold' >Or</h4>
            <ul className='flex flex-col items-start mt-3 gap-3 ml-2'>
                <li className='flex items-center gap-3 text-sm cursor-pointer font-thin group'>
                    <span className='scale-0 group-hover:scale-[1] duration-300 '><BsClipboard /></span>
                    <span className='-translate-x-8 group-hover:translate-x-0 duration-300'>muralikrishna.klax@gmail.com</span>
                </li>
                <li className='flex items-center gap-3 text-sm cursor-pointer font-thin group'>
                    <span className='scale-0 group-hover:scale-[1] duration-300 '><BsClipboard /></span>
                    <span className='-translate-x-8 group-hover:translate-x-0 duration-300'>7799225377</span>
                </li>
            </ul>
        </>
    )
}

export default OtherSocialOptions