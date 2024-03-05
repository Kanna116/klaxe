import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'

const ContactInput = ({ inputName }) => {
    return (
        <div className='w-full h-fit mt-3'>
            <label
                htmlFor={inputName}
                className='flex items-center gap-2 capitalize h-[50px] text-2xl'>
                {inputName}<sup><PiStarFourFill /></sup>
            </label>
            <input
                id={inputName}
                type="text"
                required
                className='text-black h-[50px] w-full border-0 outline-0 px-5 text-secondary'
            />

            
        </div>
    )
}

export default ContactInput