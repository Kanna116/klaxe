import Image from 'next/image'
import { handpickedProjects } from '../constants'

const HandPickedProjects = () => {
    return (
        <div className='w-full h-screen sticky top-0 py-10 overflow-y-scroll'>
            <h1 className='text-center text-4xl sticky top-0 z-[20] font-semibold'>Hand Picked Projects</h1>
            <div className='w-full h-full mt-10 flex flex-col items-center justify-start gap-5'>
                {
                    handpickedProjects.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='w-full h-fit relative shrink-0'

                            >
                                <div
                                    style={{ left: `${60- Math.random()*60}%` }}
                                    className='h-[40vh] aspect-square relative'>
                                    <Image
                                        src={item.image}
                                        width={500}
                                        height={500}
                                        alt={`project image of ${item.title}`}
                                        draggable={false}
                                        className='w-full h-full object-cover object-center'
                                    />
                                    {/* <h1>{item.title}</h1> */}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HandPickedProjects