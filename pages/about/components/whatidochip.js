import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";


const WhatIDoChip = (props) => {

    
    return (
        <div
            style={{ backgroundColor: isOpen ? 'white' : 'black' }}
            className='details w-full h-fit rounded-[3px] border-b-2 border-white duration-300 ease-linear cursor-pointer '
        >
            <div className='flex items-center justify-between px-5 h-[100px] duration-300'
                style={{ paddingLeft: isOpen ? "40px" : "20px" }}
            // onClick={() => setisOpen(prevValue => !prevValue)}
            >
                <h2 className='text-3xl mix-blend-difference'>Web Development</h2>
                <span className='text-3xl mix-blend-difference duration-300' style={{ rotate: isOpen ? "135deg" : "0deg" }}><BsPlusLg /></span>
            </div>
            {
                isOpen && <p className='animateChippara w-full h-fit pl-20 pr-5 py-5 mix-blend-difference duration-500'>Transforming great UI's into code from the past year. With immense concentration and pixel perfection weaved into every product.
                    Transforming modern designs into actual working projects through mastery in code
                </p>
            }

        </div>
    )
}

export default WhatIDoChip