import React from 'react'

const ProjectInfo = ({ details }) => {
    return (

        <div className='information w-full pt-20 pb-10 h-fit flex items-start justify-evenly'>
            {
                details.map((item, index) => {
                    return (
                        <ul key={index} className='flex flex-col gap-2'>
                            <li className='text-sm font-medium text-[#ffffff50] mb-2'>{item.heading}</li>
                            {
                                item.information.map((info, index) => <li key={index} className='text-base'>{info}</li>)
                            }
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default ProjectInfo