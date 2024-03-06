import projectdata from '@/pages/data/projectdata';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


import ProjectDisplay from './projectdisplay';

const ProjectDetail = () => {

    const router = useRouter();
    const { projectdetail } = router.query

    const [projectsData, setProjectsData] = useState(null);

    useEffect(() => {
        if (projectdetail) {
            setProjectsData(projectdata);
        }
    }, [projectdetail]);


    if (!projectdetail || !projectsData) {
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