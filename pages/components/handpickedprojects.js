import { useContext, useEffect, useState } from 'react';
import ProjectContext from '../context/projectcontext';
import HandPickedProjectCard from './handpickedprojectcard';

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
        </div>
    )
}

export default HandPickedProjects