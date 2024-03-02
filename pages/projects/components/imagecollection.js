import Image from 'next/image'
import React from 'react'

const ImageCollection = ({ title, collection }) => {
    return (
        <div className="image-collection w-full h-[70vh] py-[10vh] flex items-center justify-between">
            {
                collection.map((image, index) => {
                    return <div key={index} className='w-1/3 h-full p-10'>
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