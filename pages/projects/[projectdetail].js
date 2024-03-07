import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ProjectContext from '../context/projectcontext';
import ProjectDisplay from './projectdisplay';

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


    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full mt-[60px]'>
            <ProjectDisplay {...project} />
        </div>
    )
}

export default ProjectDetail