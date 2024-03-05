import React from 'react'

const ContactMessage = ({ inputName }) => {
    return (
        <div className='w-full h-fit mt-3'>
            <label
                htmlFor={inputName}
                className='flex items-center gap-2 capitalize h-[50px] text-2xl'>
                {inputName}
            </label>
            <textarea
                name={inputName}
                id={inputName}
                cols="30" rows="10"
                className='text-black resize-y max-h-[350px] min-h-[40px] h-[150px] w-full p-5'>
            </textarea>
        </div>

    )
}

export default ContactMessage