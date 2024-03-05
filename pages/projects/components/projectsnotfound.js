import React from 'react'

const ProjectsNotFound = () => {
    return (
        <div className='h-[50vh] w-full flex flex-col items-center justify-center gap-5'>
            <h1 className='text-4xl font-semibold'>Ooops! Seems like the project you are looking for is not done yet</h1>
            <p className='text-center text-xl font-light'>try removing the filters to see the amazing projects that are left behind</p>
        </div>
    )
}

export default ProjectsNotFound