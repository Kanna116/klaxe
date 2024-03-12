import ProjectContext from '@/pages/context/projectcontext';
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCardType = ({ id }) => {

    const { allProjects } = useContext(ProjectContext);
    const project = allProjects.find(item => item.id === id);
    // Don't access the props when it is undefined
    if (!project) {
        return <div className='w-full h-screen flex items-center justify-center bg-primary text-primary'>Loading...</div>;
    }

    const { title, desc, collection, url, codeLink, liveLink } = project

    return (
        <>
            <div className='lg:w-[25vw] md:w-[40vw] w-full h-fit flex flex-col gap-2 lg:p-5 p-0 md:p-2 shrink-0'>
                <Link
                    className='w-fit h-fit'
                    href={`/projects/${url}`}>
                    <div className='w-full aspect-square rounded-special overflow-hidden shadow-xl'>
                        <Image
                            src={collection[0]}
                            width={1000}
                            height={1000}
                            alt={`project image of ${title}`}
                            draggable={false}
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <h1 className='text-2xl mt-3'>{title}</h1>
                    <p className='line-clamp-2 text-xs font-light'>{desc}</p>
                </Link>

                <div className='flex items-center gap-4'>
                    <a href={codeLink} target='_blank'>
                        <button className='rounded-special font-light text-lg border-r-2 pr-3'>Code</button>
                    </a>
                    <a href={liveLink} target='_blank'>
                        <button className='rounded-special text-light-primary dark:text-dark-primary font-light text-lg flex items-center gap-3'>
                            Open <span className='text-2xl'><FiArrowUpRight /></span>
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectCardType