import { useContext, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import ProjectContext from '@/pages/context/projectcontext';

const ProjectListType = ({ id }) => {
    const { allProjects } = useContext(ProjectContext);
    const project = allProjects.find(item => id === item.id);

    const [floatingValues, setFloatingValues] = useState({
        left: 0,
        rotate: 0
    });

    const [cardOpen, setCardOpen] = useState(false);

    //don't access the props when it is undefined
    if (!project) {
        return <div className='w-full h-screen flex items-center justify-center bg-primary text-primary'>Loading...</div>;
    }

    const { title, details, collection, url } = project;

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setFloatingValues({
            left: e.clientX,
            rotate: -Math.floor((rect.width / 2 - e.clientX) / 50),
        });
        //Making the card open whenever the mouse is moved on above
        setCardOpen(true);
    };

    const handleMouseLeave = () => {
        //closing the card when not hovered
        setCardOpen(false);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className='group w-full h-fit lg:min-h-[80px] md:min-h-[80px] min-h-[100px] lg:p-[10px] p-0 md:p-0 flex items-center justify-between gap-10 border-b-[1px] border-secondary relative cursor-pointer'>
            <div className='w-full h-full flex lg:items-center items-start justify-between lg:gap-8 md:gap-4 gap-2  z-0 group-hover:z-30 flex-col lg:flex-row md:flex-row'>
                <h1 className='w-full lg:text-3xl text-2xl font-semibold capitalize  mix-blend-difference'>{title}</h1>
                <h3 className='shrink-0 lg:text-xl text-sm font-light lg:hover:font-semibold duration-200'>{details[0].information[0]}</h3>
            </div>
            <Link href={`/projects/${url}`} className='z-0 group-hover:z-30 bg-secondary px-5 py-2'>
                <button className='rounded-special font-semibold tracking-wider text-lg flex items-center gap-3 text-secondary'>
                    View <span className='text-2xl'><FiArrowUpRight /></span>
                </button>
            </Link>

            {
                cardOpen &&
                <div
                    style={{ left: floatingValues.left, rotate: floatingValues.rotate + 'deg' }}
                    className="hovering-card  w-[15vw] aspect-[1/1.5] absolute  pointer-events-none rounded-special overflow-hidden ease-linear duration-100 origin-center -translate-x-full  z-10 hidden md:block lg:block">
                    <Image
                        src={collection[0]}
                        width={1000}
                        height={1000}
                        alt={`project image of ${title}`}
                        className='w-full h-full object-cover object-center'
                    />
                </div>
            }

        </div>
    );
};

export default ProjectListType;
