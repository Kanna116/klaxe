import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
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
            <div>
                <a href={liveLink} target='_blank'>
                    <button className='px-[40px] py-[15px] bg-white mix-blend-difference rounded-special text-black font-semibold text-lg flex items-center gap-3'>View <span className='text-2xl'><FiArrowUpRight /></span></button>
                </a>
                <a href={codeLink} target='_blank'>
                    <button className='px-[40px] py-[15px]  mix-blend-difference rounded-special  font-semibold text-lg border-2'>Code</button>
                </a>
            </div>

            <div className='hero-image w-[80vw] aspect-video rounded-special mx-auto'>
                <Image
                    src={heroImage}
                    width={3000}
                    height={3000}
                    priority
                    alt={`Hero image of the Project ${title}`}
                    draggable={false}
                    className='w-full h-full object-cover object-center'
                />
            </div>


            <div className='information w-full pt-20 pb-10 h-fit flex items-start justify-evenly'>
                {
                    details.map((item, index) => {
                        return (
                            <ul key={index} className='flex flex-col gap-2'>
                                <li className='text-sm font-medium text-[#ffffff50] mb-2'>{item.heading}</li>
                                {
                                    item.information.map((info, index) => <li key={index} className='text-base'>{info}</li>)
                                }
                            </ul>
                        )
                    })
                }
            </div>

            <div className="problem-solved w-full py-20 flex flex-col items-center justify-center gap-5">
                <h1 className='text-3xl font-semibold'>Problem Solved</h1>
                <p className='w-2/3 text-xl font-light'>{problemSolved}</p>

            </div>

            {
                demoVideo &&
                <div className="project-video w-screen h-screen -mx-[24px] md:-mx-[64px] lg:-mx-[96px]">
                    <video src={demoVideo}
                        className='w-full h-full object-contain object-center'
                        controls
                    >
                    </video>
                </div>
            }

            <div className="image-collection w-full h-[70vh] py-[10vh] flex items-center justify-between">
                {
                    collection.map((image, index) => {
                        return <div key={index} className='w-1/3 h-full p-10'>
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                draggable={false}
                                alt={`collection image ${index + 1} of the project ${title}`}
                                className='w-full h-full object-cover object-center'
                            />
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default ProjectDetail