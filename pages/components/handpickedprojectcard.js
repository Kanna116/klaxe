import Image from 'next/image';

const HandPickedProjectCard = ({ item }) => {
    return (
        <div
            className='group h-[40vh] aspect-square shrink-0 relative overflow-hidden'
        >
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
    )
}

export default HandPickedProjectCard