import Image from 'next/image'
import React from 'react'

const ImageCollection = ({ title, collection }) => {
    return (
        <div className="image-collection w-full lg:h-[70vh] h-fit py-[10vh] flex items-center justify-between flex-col lg:flex-row md:flex-row lg:gap-0 gap-5">
            {
                collection.map((image, index) => {
                    return <div key={index} className='lg:w-1/3 md:w-1/3 w-4/5 lg:h-full aspect-square lg:p-10 md:p-0 p-0'>
                        <Image
                            src={image}
                            width={500}
                            height={500}
                            draggable={false}
                            alt={`collection image ${index + 1} of the project ${title}`}
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                })
            }
        </div>
    )
}

export default ImageCollection