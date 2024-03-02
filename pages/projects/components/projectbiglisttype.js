import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectBigListType = ({ id, title, desc, liveLink, codeLink, heroImage, details, problemSolved, demoVideo, collection, url }) => {

    const [type, setType] = useState(false);
    useEffect(() => {
        if (id % 2 === 0) {
            setType(true)
        }
    }, [id]);


    return (
        <div className={`w-2/3 h-[50vh] flex gap-5 mx-auto mt-[50px] ${type ? "flex-row" : "flex-row-reverse"}`}>
            <div className='h-full aspect-square bg-zinc-100'>
                <Image
                    src={collection[0]}
                    width={1000}
                    height={1000}
                    draggable={false}
                    alt={`image of the project ${title}`}
                    className='w-full h-full object-cover object-center'
                />
            </div>
            <div className='w-1/2 h-full flex flex-col items-start justify-center gap-5 p-7'>
                <h1 className='text-3xl font-semibold'>{title}</h1>
                <p className='line-clamp-4 text-lg font-light'>{desc}</p>
                <div className='flex items-center justify-start gap-[25px]'>
                    <Link href={`/projects/${url}`}>
                        <button className='px-[40px] py-[15px] bg-white mix-blend-difference rounded-special text-black font-semibold text-lg flex items-center gap-3'>
                            Open <span className='text-2xl'><FiArrowUpRight /></span>
                        </button>
                    </Link>
                    <a href={codeLink} target='_blank'>
                        <button className='px-[40px] py-[15px]  mix-blend-difference rounded-special  font-semibold text-lg border-2'>Code</button>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default ProjectBigListType