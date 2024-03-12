import React from 'react'

const DemoVideo = ({demoVideo}) => {
    return (
        <>
            {
                demoVideo &&
                <div className="project-video w-screen lg:h-screen h-fit -mx-[24px] md:-mx-[64px] lg:-mx-[96px] shadow-2xl">
                    <video src={demoVideo}
                        className='w-full h-full object-contain object-center'
                        controls
                    >
                    </video>
                </div>
            }

        </>
    )
}

export default DemoVideo