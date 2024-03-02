import React from 'react'

const ProblemSolved = ({problemSolved}) => {
    return (
        <div className="problem-solved w-full lg:py-20 md:py-16 py-10 flex flex-col items-center justify-center gap-5">
            <h1 className='text-3xl font-semibold'>Problem Solved</h1>
            <p className='lg:w-2/3 w-full text-xl font-light text-center lg:text-start md:text-start'>{problemSolved}</p>
        </div>
    )
}

export default ProblemSolved