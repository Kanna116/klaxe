import ProjectContext from '@/pages/context/projectcontext'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectBigListType = ({ id }) => {

    const { allProjects } = useContext(ProjectContext);
    const project = allProjects.find(item => id === item.id);

    // Don't access the props when it is undefined
    if (!project) {
        return <div className='w-full h-screen flex items-center justify-center bg-zinc-700 text-white'>Loading...</div>;
    }

    const { title, desc, codeLink, collection, url } = project


    return (
        <div className={`lg:w-2/3 md:w-full w-full lg:h-[50vh] md:h-[40vh] h-fit flex justify-between gap-5 mx-auto lg:mt-[50px] md:mt-[100px] mt-[50px]   flex-col  ${id % 2 === 0 ? `lg:flex-row md:flex-row` : `lg:flex-row-reverse md:flex-row-reverse`}`}>
            <div className='lg:h-full md:h-full h-fit lg:w-fit md:w-fit w-full  lg:aspect-square md:aspect-square aspect-video rounded-special overflow-hidden shadow-2xl'>
                <Image
                    src={collection[0]}
                    width={1000}
                    height={1000}
                    draggable={false}
                    alt={`image of the project ${title}`}
                    className='w-full h-full object-cover object-center'
                />
            </div>
            <div className='lg:w-1/2 md:w-1/2 w-full h-full flex flex-col items-start justify-center gap-5 lg:p-7 p-0'>
                <h1 className='text-3xl font-semibold'>{title}</h1>
                <p className='line-clamp-4 lg:text-base text-xs lg:font-normal font-thin'>{desc}</p>
                <div className='flex items-center justify-start gap-[25px]'>
                    <Link href={`/projects/${url}`}>
                        <button className='px-[40px] py-[15px] bg-secondary rounded-special text-secondary font-light text-lg flex items-center gap-3'>
                            Open <span className='text-2xl'><FiArrowUpRight /></span>
                        </button>
                    </Link>
                    <a href={codeLink} target='_blank'>
                        <button className='px-[40px] py-[15px]  rounded-special  font-semibold text-lg border-2 border-secondary'>Code</button>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default ProjectBigListType