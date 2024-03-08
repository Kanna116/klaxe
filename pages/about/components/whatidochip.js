import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";


const WhatIDoChip = (props) => {
    const { id, title, desc, isOpen, handleChipOpen } = props


    return (
        <div
            className={`details w-full h-fit rounded-[3px] border-b-2 border-light-secondary dark:border-dark-secondary duration-300 ease-linear cursor-pointer ${isOpen ? 'bg-light-secondary dark:bg-dark-secondary' : 'bg-light-primary dark:bg-dark-primary'}`}
        >
            <div className='flex items-center justify-between lg:px-7 px-5 h-[100px] duration-300'
                onClick={() => handleChipOpen(id)}
            >
                <h2 className='lg:text-3xl md:text-2xl text-xl mix-blend-difference text-light-secondary  dark:text-dark-primary '>{title}</h2>
                <span className='text-3xl mix-blend-difference duration-300 text-light-secondary  dark:text-dark-primary  ' style={{ rotate: isOpen ? "135deg" : "0deg" }}><BsPlusLg /></span>
            </div>
            {
                isOpen && <p className='animateChippara w-full h-fit lg:pl-20 pl-10 pr-5 py-5 mix-blend-difference duration-500 text-light-secondary  dark:text-dark-primary  font-light text-xs lg:text-sm md:text-sm'>{desc}</p>
            }

        </div>
    )
}

export default WhatIDoChip