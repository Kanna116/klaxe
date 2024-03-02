import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectOpinion = () => {
    return (
        <div className="opinion w-full h-fit py-20">
            <h1 className='text-3xl font-semibold'>Would you like to express you opinion on this project ?</h1>
            <textarea
                name="opinion"
                id="opinion"
                cols="30"
                rows="10"
                placeholder='Please express your insights of the project openly'
                className='w-full  bg-transparent mt-5 border-2 rounded-special p-5 resize-y min-h-[15vh] max-h-[30vh]'
            ></textarea>
            <button className=' py-[15px] mix-blend-difference rounded-special font-semibold text-xl flex items-center gap-3'>Send <span className='text-2xl'><FiArrowUpRight /></span></button>
        </div>

    )
}

export default ProjectOpinion