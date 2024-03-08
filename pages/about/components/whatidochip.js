import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";


const WhatIDoChip = (props) => {
    const { id, title, desc, isOpen, handleChipOpen } = props


    return (
        <div
            className={`details w-full h-fit rounded-[3px] border-b-2 border-secondary duration-300 ease-linear cursor-pointer ${isOpen? 'bg-secondary':'bg-primary'}`}
        >
            <div className='flex items-center justify-between lg:px-7 px-5 h-[100px] duration-300'
                // style={{ paddingLeft: isOpen ? "40px" : "20px" }}
                onClick={() => handleChipOpen(id)}
            >
                <h2 className='lg:text-3xl md:text-2xl text-xl mix-blend-difference text-secondary'>{title}</h2>
                <span className='text-3xl mix-blend-difference duration-300 text-secondary' style={{ rotate: isOpen ? "135deg" : "0deg" }}><BsPlusLg /></span>
            </div>
            {
                isOpen && <p className='animateChippara w-full h-fit lg:pl-20 pl-10 pr-5 py-5 mix-blend-difference duration-500 text-secondary font-light text-xs lg:text-sm md:text-sm'>{desc}</p>
            }

        </div>
    )
}

export default WhatIDoChip