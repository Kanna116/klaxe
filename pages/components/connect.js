import React from 'react'

const Connect = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center gap-10 flex-col'>
            <h1 className='text-6xl'>Let's Work Together</h1>
            <div className='flex gap-5 items-center'>
                <button className='text-black bg-white px-[30px] py-[10px] rounded-[3px] text-base font-semibold'>Connect</button>
                <button className='text-white border-white border-[1px] px-[30px] py-[10px] rounded-[3px] text-base font-semibold'>Mail</button>
            </div>
        </div>
    )
}

export default Connect