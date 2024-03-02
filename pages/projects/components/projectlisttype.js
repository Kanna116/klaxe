import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectListType = ({ title, desc, liveLink, codeLink, heroImage, details, problemSolved, demoVideo, collection, url }) => {
    return (
        <div className='w-full h-fit min-h-[80px] p-[10px] flex items-center justify-between gap-10 border-b-[1px] border-zinc-100'>
            <div className='w-full h-full flex items-center justify-between gap-8'>
                <h1 className='w-full text-3xl font-semibold capitalize'>{title}</h1>
                <h3 className='shrink-0 text-xl font-thin'>{details[0].information[0]}</h3>
            </div>
            <Link href={`/projects/${url}`}>
                <button className='mix-blend-difference rounded-special font-semibold text-lg flex items-center gap-3'>
                    View <span className='text-2xl'><FiArrowUpRight /></span>
                </button>
            </Link>
        </div>
    )
}

export default ProjectListType