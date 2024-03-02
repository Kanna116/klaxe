import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectCardType = ({ id, title, desc, liveLink, codeLink, heroImage, details, problemSolved, demoVideo, collection, url }) => {
    return (
        <Link
        className='w-fit h-fit shrink-0'
        href={`/projects/${url}`}>
            <div className='w-[25vw] h-fit flex flex-col gap-2 p-5'>
                <div className='w-full aspect-square rounded-special overflow-hidden'>
                    <Image
                        src={collection[0]}
                        width={1000}
                        height={1000}
                        alt={`project image of ${title}`}
                        draggable={false}
                        className='w-full h-full object-cover object-center'
                    />
                </div>
                <h1 className='text-2xl '>{title}</h1>
                <p className='line-clamp-2 text-xs font-thin'>{desc}</p>
            </div>
        </Link>

    )
}

export default ProjectCardType