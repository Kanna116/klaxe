import Image from 'next/image'

const ImageCollection = ({ title, collection }) => {

    if(!title && !collection){
        return <div className='w-full h-full flex items-center justify-center bg-primary text-primary'>Loading...</div>; 
    }

    return (
        <div className="image-collection w-full lg:h-[70vh] h-fit py-[5vh] lg:py-[10vh] md:py-[10vh] flex items-center justify-between flex-col lg:flex-row md:flex-row lg:gap-0 gap-5">
            {
                collection.map((image, index) => {
                    return <div key={index} className='lg:w-1/3 md:w-1/3 w-4/5 lg:h-full aspect-square lg:p-10 md:p-0 p-0 overflow-hidden drop-shadow-2xl'>
                        <Image
                            src={image}
                            width={500}
                            height={500}
                            draggable={false}
                            alt={`collection image ${index + 1} of the project ${title}`}
                            className='w-full h-full object-cover object-center  hover:scale-110 duration-300'
                        />
                    </div>
                })
            }
        </div>
    )
}

export default ImageCollection