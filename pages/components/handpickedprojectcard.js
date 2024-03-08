import Image from 'next/image';
import Link from 'next/link';

const HandPickedProjectCard = ({ title, url, heroImage, }) => {

    return (
        <Link href={`/projects/${url}`}>
            <div
                className='group h-[40vh] aspect-square shrink-0 relative overflow-hidden shadow-2xl'
            >
                <Image
                    src={heroImage}
                    width={500}
                    height={500}
                    alt={`project image of ${title}`}
                    draggable={false}
                    priority
                    className='w-full h-full object-cover object-center'
                />
                <div className='absolute inset-0  lg:group-hover:bg-[#000000aa] bg-gradient-to-t lg:from-transparent from-black duration-200 ease-in-out'></div>
                <h1 className='absolute bottom-5 left-5 text-xl font-semibold lg:translate-y-14 translate-y-0 group-hover:translate-y-0 duration-200 ease-in-out text-white'>{title}</h1>
            </div>
        </Link>
    )
}

export default HandPickedProjectCard