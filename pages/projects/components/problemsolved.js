import React from 'react'

const ProblemSolved = ({problemSolved}) => {
    return (
        <div className="problem-solved w-full lg:py-20 md:py-16 py-10 flex flex-col items-center justify-center gap-5">
            <h1 className='lg:text-3xl md:text-xl text-xl font-semibold'>Problem Solved</h1>
            <p className='lg:w-2/3 w-full lg:text-xl md:text-xl text-sm font-light text-center lg:text-start md:text-start'>{problemSolved}</p>
        </div>
    )
}

export default ProblemSolved