import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Navbar from '../components/navbar';
import projectdata from './projectdata';

const ProjectDetail = () => {

    const router = useRouter();
    const { projectdetail } = router.query


    /*
    
    this data is temporary 
    used to check the layout and how the project will be displayed
    later the data will come from the projects page

    */

    if (!projectdetail) {
        return <div className='w-screen min-h-screen flex items-center justify-center'>Loading...</div>;
    }


    const [projectsData, setProjectsData] = useState(projectdata);

    const project = projectsData.find(item => item.url === projectdetail)
    
    if (!project) {
        return <div className='w-screen min-h-screen flex items-center justify-center bg-red-400'>Loading...</div>;
    }

    const { title, desc, liveLink, codeLink, heroImage, details, problemSolved, demoVideo, collection } = project



    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full mt-[60px]'>
            <Navbar />
            <h1 className='text-5xl font-semibold'>{title}</h1>
            <p className='text-xs'>{desc}</p>
            <button></button>
        </div>
    )
}

export default ProjectDetail