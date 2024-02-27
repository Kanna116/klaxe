import Image from 'next/image'
import { handpickedProjects } from '../constants'

const HandPickedProjects = () => {
    return (
        <div className='w-full h-screen py-10 overflow-hidden'>
            <h1 className='text-center text-4xl sticky top-0 z-[20] font-semibold'>Hand Picked Projects</h1>
            <div className='w-full h-full mt-10 flex flex-col items-center justify-start gap-[20vh]  overflow-y-scroll sticky top-0'>
                {
                    handpickedProjects.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='w-full h-fit relative shrink-0'

                            >
                                <div
                                    style={{ left: `${60 - Math.random() * 60}%` }}
                                    className='group h-[40vh] aspect-square relative overflow-hidden'>
                                    <Image
                                        src={item.image}
                                        width={500}
                                        height={500}
                                        alt={`project image of ${item.title}`}
                                        draggable={false}
                                        className='w-full h-full object-cover object-center'
                                    />
                                    <div className='absolute inset-0  group-hover:bg-[#000000aa] duration-200 ease-in-out'></div>
                                    <h1 className='absolute bottom-5 left-5 text-2xl font-semibold translate-y-14 group-hover:translate-y-0 duration-200 ease-in-out'>{item.title}</h1>
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