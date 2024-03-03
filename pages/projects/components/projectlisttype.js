import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectListType = ({ title, desc, liveLink, codeLink, heroImage, details, problemSolved, demoVideo, collection, url }) => {

    const [floatingValues, setFloatingValues] = useState({
        left: 0,
        rotate: 0
    });

    const [cardOpen, setCardOpen] = useState(false);

    const handleMouseMove = (e) => {

        const rect = e.currentTarget.getBoundingClientRect();
        // console.log((rect.width /2 - e.clientX))

        setFloatingValues(prevValues => {
            return {
                ...prevValues,
                left: e.clientX,
                rotate: Math.floor(-(rect.width / 2 - e.clientX) / 50),
            }
        })
    }


    return (
        <div
            onMouseMove={(e) => { handleMouseMove(e); setCardOpen(true) }}
            onMouseLeave={() => setCardOpen(false)}
            className='group w-full h-fit min-h-[80px] p-[10px] flex items-center justify-between gap-10 border-b-[1px] border-zinc-100 relative cursor-pointer'>
            <div className='w-full h-full flex items-center justify-between gap-8  z-0 group-hover:z-30 '>
                <h1 className='w-full text-3xl font-semibold capitalize  mix-blend-difference'>{title}</h1>
                <h3 className='shrink-0 text-xl font-thin hover:font-semibold hover:text-black'>{details[0].information[0]}</h3>
            </div>
            <Link href={`/projects/${url}`} className='z-0 group-hover:z-30 bg-black px-5 py-2'>
                <button className='mix-blend-difference rounded-special font-semibold text-lg flex items-center gap-3 '>
                    View <span className='text-2xl'><FiArrowUpRight /></span>
                </button>
            </Link>

            {cardOpen &&
                <div
                    style={{ left: floatingValues.left, rotate: floatingValues.rotate + 'deg' }}
                    className="hovering-card  w-[15vw] aspect-[1/1.5] absolute  pointer-events-none rounded-special overflow-hidden ease-linear duration-100 origin-center -translate-x-full  z-10 hidden md:block lg:block">
                    <Image
                        src={collection[0]}
                        width={1000}
                        height={1000}
                        alt={`project image of ${title}`}
                        className='w-full h-full object-cover object-center'
                    />
                </div>}

        </div>
    )
}

export default ProjectListType