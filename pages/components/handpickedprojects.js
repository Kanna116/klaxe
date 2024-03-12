import { useContext, useEffect, useState } from 'react';
import ProjectContext from '../context/projectcontext';
import HandPickedProjectCard from './handpickedprojectcard';
import Link from 'next/link';

const HandPickedProjects = () => {

    const { allProjects } = useContext(ProjectContext);
    const handPickedProjects = allProjects.filter(project => project.handpickedProject)


    return (
        <div className='w-full min-h-screen py-10 overflow-hidden'>
            <h1 className='text-center text-4xl z-[20] font-semibold text-light-primary dark:text-dark-primary'>Hand Picked Projects</h1>
            <div className='w-full h-fit mt-10 flex flex-col py-12 lg:flex-row lg:flex-wrap items-center  lg:items-start lg:justify-center justify-start lg:gap-[15vh] gap-10  overflow-y-scroll'>
                {
                    handPickedProjects.map((item, index) => <HandPickedProjectCard key={index} {...item} />)
                }
            </div>
            <div className='w-full h-fit grid place-items-center mt-5'>
                <Link href={'/projects'}>
                    <button className=' cursor-pointer text-light-secondary dark:text-dark-secondary bg-light-secondary dark:bg-dark-secondary px-[30px] py-[10px] rounded-[3px] text-base font-semibold'>All Projects</button>
                </Link>

            </div>
        </div>
    )
}

export default HandPickedProjects