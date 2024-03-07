import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ProjectContext from '../context/projectcontext';
import Navbar from '../components/navbar';
import ProjectHero from './components/projecthero';
import ProjectInfo from './components/projectinfo';
import ProblemSolved from './components/problemsolved';
import DemoVideo from './components/demovideo';
import ImageCollection from './components/imagecollection';
import ProjectOpinion from './components/projectopinion';
import Connect from '../components/connect';
import Footer from '../components/footer';

const ProjectDetail = () => {
    const [projectsData, setProjectsData] = useState(null);
    const { allProjects } = useContext(ProjectContext);

    const router = useRouter();
    const { projectdetail } = router.query


    useEffect(() => {
        if (projectdetail && allProjects.length > 0) {
            setProjectsData(allProjects);
        }
    }, [projectdetail, allProjects]);


    if (!projectdetail || projectsData === null) {
        return <div className='w-screen min-h-screen flex items-center justify-center'>Loading...</div>;
    }

    const project = projectsData.find(item => item.url === projectdetail)

    if (!project) {
        return <div className='w-screen min-h-screen flex items-center justify-center'>
            Sorry The page You are looking for is not made yet  <br /> {`:'(`}
        </div>;
    }

    const { title, details, problemSolved, demoVideo, collection } = project

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