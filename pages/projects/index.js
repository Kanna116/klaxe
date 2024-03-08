import { useContext, useState } from 'react'
import { BsList } from "react-icons/bs"
import { IoGrid } from 'react-icons/io5'
import { PiRowsFill } from "react-icons/pi"
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ProjectContext from '../context/projectcontext'
import Connect from './components/connect'
import Filtering from './components/filtering'
import ProjectBigListType from './components/projectbiglisttype'
import ProjectCardType from './components/projectcardtype'
import ProjectListType from './components/projectlisttype'
import ProjectsNotFound from './components/projectsnotfound'
import Sorting from './components/sorting'


const Projects = () => {
    const { allProjects } = useContext(ProjectContext);

    const [projects, setProjects] = useState(allProjects);

    //list style
    const [listStyle, setListStyle] = useState('grid');


    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full'>
            <Navbar />
            <div className='w-full h-fit py-10 flex flex-col items-center justify-center gap-5 mt-[60px]'>
                <h1 className='lg:text-5xl text-3xl text-center capitalize font-semibold text-primary'>Our Projects</h1>
                <p className='lg:text-2xl text-base font-light lg:font-medium text-center text-primary'>A place where you will find wonders.</p>
            </div>



            <div className='list-style-controller flex items-center gap-2 w-fit h-fit mx-auto'>
                <span title='list style' onClick={() => setListStyle('list')} className={`h-full aspect-square rounded-full p-2 border-[1px] border-secondary ${listStyle === 'list' ? 'bg-secondary' : 'bg-primary'} ${listStyle === 'list' ? 'text-secondary' : 'text-primary'}`}><BsList /></span>
                <span title='card style' onClick={() => setListStyle('grid')} className={`h-full aspect-square rounded-full p-2 border-[1px] border-secondary ${listStyle === 'grid' ? 'bg-secondary' : 'bg-primary'} ${listStyle === 'grid' ? 'text-secondary' : 'text-primary'}`}><IoGrid /></span>
                <span title='bigList style' onClick={() => setListStyle('bigList')} className={`h-full aspect-square rounded-full p-2 border-[1px] border-secondary ${listStyle === 'bigList' ? 'bg-secondary' : 'bg-primary'} ${listStyle === 'bigList' ? 'text-secondary' : 'text-primary'}`}><PiRowsFill /></span>
            </div>

            <div className='w-full h-fit min-h-[50px] flex lg:items-center items-start justify-between mt-5 mb-10 lg:px-[10px] px-0 flex-col lg:flex-row md:flex-row lg:gap-0 gap-5'>
                <Filtering setProjects={setProjects} />
                <Sorting setProjects={setProjects} />
            </div>
            {
                listStyle === 'grid' &&
                <div className='flex w-full h-fit flex-wrap lg:my-20 md:my-10 my-0 justify-between lg:gap-y-5 gap-y-10'>
                    {
                        projects.map((project) => <ProjectCardType key={project.id} {...project} />)
                    }
                </div>
            }
            {
                listStyle === 'list' && (
                    <div className='flex flex-col'>
                        {projects.map((project) => <ProjectListType key={project.id} id={project.id} />)}
                    </div>
                )
            }
            {
                listStyle === 'bigList' && (
                    <div className='flex flex-col'>
                        {projects.map((project) => <ProjectBigListType key={project.id} id={project.id} />)}
                    </div>
                )
            }
            {
                projects.length === 0 &&
                <ProjectsNotFound />

            }

            < Connect />
            <Footer />
        </div>
    )
}

export default Projects