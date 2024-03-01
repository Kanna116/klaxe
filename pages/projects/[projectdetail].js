import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../components/navbar';

const ProjectDetail = () => {

    const router = useRouter();
    const { projectdetail } = router.query

    return (
        <div className='w-full min-h-screen mt-[60px]'>
            <Navbar />
            sdflkndslk
        </div>
    )
}

export default ProjectDetail