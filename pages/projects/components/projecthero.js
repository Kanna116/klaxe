import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectHero = ({ title, desc, liveLink, codeLink, heroImage }) => {
    return (
        <>
            <div className='w-full h-fit flex lg;py-20 md:py-20 py-10 lg:flex-row md:flex-row flex-col gap-5'>
                <div className='w-full flex gap-5 flex-col md:flex-col lg:flex-row lg:px-5 md:px-5 px-0'>
                    <h1 className='text-5xl font-semibold lg:w-1/2 w-full'>{title}</h1>
                    <p className='text-sm lg:w-1/2 w-full font-light'>{desc}</p>
                </div>
                <div className='w-fit h-full lg:px-10 md:px-5 px-0 flex-wrap flex lg:flex-col md:flex-col flex-row items-start justify-start gap-5'>
                    <a href={liveLink} target='_blank'>
                        <button className='px-[40px] py-[15px] bg-light-secondary dark:bg-dark-secondary rounded-special text-light-secondary dark:text-dark-secondary font-semibold text-lg flex items-center gap-3'>
                            View <span className='text-2xl'><FiArrowUpRight /></span>
                        </button>
                    </a>
                    <a href={codeLink} target='_blank'>
                        <button className='px-[40px] py-[15px]  rounded-special font-semibold text-lg border-[1px] border-light-secondary dark:border-dark-secondary'>Code</button>
                    </a>
                </div>
            </div>
            <div className='hero-image lg:w-[80vw] md:w-[80vw] w-[100vw] aspect-video rounded-special lg:mx-auto md:mx-auto -mx-[24px] shadow-2xl'>
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