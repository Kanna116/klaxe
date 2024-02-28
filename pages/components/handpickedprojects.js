import { useEffect, useState } from 'react';
import { handpickedProjects } from '../constants';
import HandPickedProjectCard from './handpickedprojectcard';

const HandPickedProjects = () => {
    const [randomLeft, setRandomLeft] = useState(0);

    useEffect(() => {
        // Calculate random left value once on component mount
        const randomValue = Math.floor(Math.random() * 80);
        setRandomLeft(randomValue);
    }, []);
    return (
        <div className='w-full h-screen py-10 overflow-hidden'>
            <h1 className='text-center text-4xl z-[20] font-semibold'>Hand Picked Projects</h1>
            <div className='w-full h-fit mt-10 flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-start lg:justify-center justify-start lg:gap-[15vh] gap-10  overflow-y-scroll sticky top-0'>
                {
                    handpickedProjects.map((item, index) => <HandPickedProjectCard key={index} item={item} />)
                }
            </div>
        </div>
    )
}

export default HandPickedProjects