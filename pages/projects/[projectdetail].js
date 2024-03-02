import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from '../components/navbar';
import projectdata from './projectdata';
import Connect from './components/connect';
import Footer from '../components/footer';
import ProjectHero from './components/projecthero';
import ProjectInfo from './components/projectinfo';
import ProblemSolved from './components/problemsolved';
import DemoVideo from './components/demovideo';
import ImageCollection from './components/imagecollection';
import ProjectOpinion from './components/projectopinion';

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
            <ProjectHero {...project} />
            <ProjectInfo details={details} />
            <ProblemSolved problemSolved={problemSolved} />
            <DemoVideo demoVideo={demoVideo} />
            <ImageCollection collection={collection} title={title} />
            <ProjectOpinion />
            <Connect />

            <Footer />
        </div>
    )
}

export default ProjectDetail