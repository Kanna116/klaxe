import ProjectContext from '@/pages/context/projectcontext';
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

const ProjectCardType = ({ id }) => {

    const { allProjects } = useContext(ProjectContext);
    const project = allProjects.find(item => item.id === id);
    // Don't access the props when it is undefined
    if (!project) {
        return <div className='w-full h-screen flex items-center justify-center bg-primary text-primary'>Loading...</div>;
    }

    const { title, desc, collection, url } = project

    return (
        <Link
            className='w-fit h-fit shrink-0'
            href={`/projects/${url}`}>
            <div className='lg:w-[25vw] md:w-[40vw] w-full h-fit flex flex-col gap-2 lg:p-5 p-0 md:p-2 shrink-0'>
                <div className='w-full aspect-square rounded-special overflow-hidden shadow-2xl'>
                    <Image
                        src={collection[0]}
                        width={1000}
                        height={1000}
                        alt={`project image of ${title}`}
                        draggable={false}
                        className='w-full h-full object-cover object-center'
                    />
                </div>
                <h1 className='text-2xl  text-primary'>{title}</h1>
                <p className='line-clamp-2 text-xs font-light text-primary'>{desc}</p>
            </div>
        </Link>

    )
}

export default ProjectCardType