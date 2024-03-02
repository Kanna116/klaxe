import React from 'react'

const ProblemSolved = ({problemSolved}) => {
    return (
        <div className="problem-solved w-full py-20 flex flex-col items-center justify-center gap-5">
            <h1 className='text-3xl font-semibold'>Problem Solved</h1>
            <p className='w-2/3 text-xl font-light'>{problemSolved}</p>
        </div>
    )
}

export default ProblemSolved