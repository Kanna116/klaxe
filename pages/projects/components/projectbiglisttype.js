import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectBigListType = ({ id, title, desc, codeLink, collection, url }) => {

    const [type, setType] = useState(false);
    useEffect(() => {
        if (id % 2 === 0) {
            setType(true)
        }
    }, [id]);


    return (
        <div className={`lg:w-2/3 md:w-full w-full lg:h-[50vh] md:h-[40vh] h-fit flex gap-5 mx-auto lg:mt-[50px] md:mt-[100px] mt-[50px] ${type ? "lg:flex-row" : "lg:flex-row-reverse"} ${type ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}>
            <div className='lg:h-full md:h-full h-fit lg:w-fit md:w-fit w-full  lg:aspect-square md:aspect-square aspect-video rounded-special overflow-hidden'>
                <Image
                    src={collection[0]}
                    width={1000}
                    height={1000}
                    draggable={false}
                    alt={`image of the project ${title}`}
                    className='w-full h-full object-cover object-center'
                />
            </div>
            <div className='lg:w-1/2 md:w-1/2 w-full h-full flex flex-col items-start justify-center gap-5 lg:p-7 p-0'>
                <h1 className='text-3xl font-semibold'>{title}</h1>
                <p className='line-clamp-4 lg:text-base text-xs lg:font-light font-thin'>{desc}</p>
                <div className='flex items-center justify-start gap-[25px]'>
                    <Link href={`/projects/${url}`}>
                        <button className='px-[40px] py-[15px] bg-white mix-blend-difference rounded-special text-black font-semibold text-lg flex items-center gap-3'>
                            Open <span className='text-2xl'><FiArrowUpRight /></span>
                        </button>
                    </Link>
                    <a href={codeLink} target='_blank'>
                        <button className='px-[40px] py-[15px]  mix-blend-difference rounded-special  font-semibold text-lg border-2'>Code</button>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default ProjectBigListType