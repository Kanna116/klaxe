import Image from 'next/image'
import { handpickedProjects } from '../constants'

const HandPickedProjects = () => {
    return (
        <div className='w-full h-screen py-10 overflow-hidden'>
            <h1 className='text-center text-4xl sticky top-0 z-[20] font-semibold'>Hand Picked Projects</h1>
            <div className='w-full h-full mt-10 flex flex-col items-center justify-start lg:gap-[20vh] gap-10  overflow-y-scroll sticky top-0'>
                {
                    handpickedProjects.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='w-full h-fit relative shrink-0 flex items-center justify-center md:justify-start lg:justify-start'
                            >
                                <div
                                    className='group h-[40vh] aspect-square shrink-0 relative overflow-hidden'>
                                    <Image
                                        src={item.image}
                                        width={500}
                                        height={500}
                                        alt={`project image of ${item.title}`}
                                        draggable={false}
                                        className='w-full h-full object-cover object-center'
                                    />
                                    <div className='absolute inset-0  lg:group-hover:bg-[#000000aa] bg-gradient-to-t lg:from-transparent from-black duration-200 ease-in-out'></div>
                                    <h1 className='absolute bottom-5 left-5 text-2xl font-semibold lg:translate-y-14 translate-y-0 group-hover:translate-y-0 duration-200 ease-in-out'>{item.title}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HandPickedProjects