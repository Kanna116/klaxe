import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectHero = ({ title, desc, liveLink, codeLink, heroImage }) => {
    return (
        <>
            <div className='w-full h-fit flex py-20'>
                <div className='w-full flex gap-5'>
                    <h1 className='text-5xl font-semibold w-1/2'>{title}</h1>
                    <p className='text-sm w-1/2 font-extralight'>{desc}</p>
                </div>
                <div className='w-fit h-full px-10 flex flex-col items-start justify-start gap-5'>
                    <a href={liveLink} target='_blank'>
                        <button className='px-[40px] py-[15px] bg-white mix-blend-difference rounded-special text-black font-semibold text-lg flex items-center gap-3'>View <span className='text-2xl'><FiArrowUpRight /></span></button>
                    </a>
                    <a href={codeLink} target='_blank'>
                        <button className='px-[40px] py-[15px]  mix-blend-difference rounded-special  font-semibold text-lg border-2'>Code</button>
                    </a>
                </div>
            </div>
            <div className='hero-image w-[80vw] aspect-video rounded-special mx-auto'>
                <Image
                    src={heroImage}
                    width={3000}
                    height={3000}
                    priority
                    alt={`Hero image of the Project ${title}`}
                    draggable={false}
                    className='w-full h-full object-cover object-center'
                />
            </div>
        </>
    )
}

export default ProjectHero