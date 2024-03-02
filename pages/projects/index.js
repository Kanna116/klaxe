import { useState } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Connect from './components/connect'
import ProjectBigListType from './components/projectbiglisttype'
import ProjectCardType from './components/projectcardtype'
import ProjectListType from './components/projectlisttype'
import projectdata from './projectdata'

const Projects = () => {
    const [data, setData] = useState(projectdata);

    const projects = data

    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full'>
            <Navbar />
            <div className='w-full h-fit py-10 flex flex-col items-center justify-center gap-5 mt-[60px]'>
                <h1 className='text-5xl capitalize font-semibold'>Our Projects</h1>
                <p className='text-2xl'>A place where you will find wonders.</p>
            </div>
            <div className='flex w-full h-fit flex-wrap my-20 justify-evenly'>
                {
                    projects.map((project) => <ProjectCardType key={project.id} {...project} />)
                }
            </div>



            {
                projects.map((project) => <ProjectListType key={project.id} {...project} />)
            }

            {
                projects.map((project) => <ProjectBigListType key={project.id} {...project} />)
            }


            <Connect />
            <Footer />
        </div>
    )
}

export default Projects