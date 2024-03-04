import { useState } from 'react'
import { BsList } from "react-icons/bs"
import { IoGrid } from 'react-icons/io5'
import { PiRowsFill } from "react-icons/pi"
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Connect from './components/connect'
import ProjectBigListType from './components/projectbiglisttype'
import ProjectCardType from './components/projectcardtype'
import ProjectListType from './components/projectlisttype'
import projectdata from './projectdata'
import Sorting from './components/sorting'
import Filtering from './components/filtering'

const Projects = () => {
    const [data, setData] = useState(projectdata);
    const [projects, setProjects] = useState(data);





    //list style
    const [listStyle, setListStyle] = useState('grid');


    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full'>
            <Navbar />
            <div className='w-full h-fit py-10 flex flex-col items-center justify-center gap-5 mt-[60px]'>
                <h1 className='text-5xl capitalize font-semibold'>Our Projects</h1>
                <p className='text-2xl'>A place where you will find wonders.</p>
            </div>
            <div className='w-full h-fit min-h-[50px] flex items-center justify-between relative'>

                <Filtering data={data} setProjects={setProjects} />
                <div className='list-style-controller flex items-center gap-2 w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <span title='list style' onClick={() => setListStyle('list')} style={{ backgroundColor: listStyle === 'list' ? 'white' : 'black', color: listStyle === 'list' ? 'black' : 'white' }} className='h-full aspect-square rounded-full p-2 border-[1px]'><BsList /></span>
                    <span title='card style' onClick={() => setListStyle('grid')} style={{ backgroundColor: listStyle === 'grid' ? 'white' : 'black', color: listStyle === 'grid' ? 'black' : 'white' }} className='h-full aspect-square rounded-full p-2 border-[1px]'><IoGrid /></span>
                    <span title='bigList style' onClick={() => setListStyle('bigList')} style={{ backgroundColor: listStyle === 'bigList' ? 'white' : 'black', color: listStyle === 'bigList' ? 'black' : 'white' }} className='h-full aspect-square rounded-full p-2 border-[1px]'><PiRowsFill /></span>
                </div>

                <Sorting setProjects={setProjects} />




            </div>


            {

                //used ternary to seperate the grid style as it seeming to have a disturbance in the UI
                listStyle === 'grid' ?
                    <div className='flex w-full h-fit flex-wrap my-20 justify-between gap-y-5'>
                        {
                            projects.map((project) => <ProjectCardType key={project.id} {...project} />)
                        }
                    </div>
                    :
                    projects.map((project) => {
                        if (listStyle === 'list') {
                            return <ProjectListType key={project.id} {...project} />
                        }
                        else if (listStyle === 'bigList') {
                            return <ProjectBigListType key={project.id} {...project} />
                        }
                    })


            }
            < Connect />
            <Footer />
        </div>
    )
}

export default Projects