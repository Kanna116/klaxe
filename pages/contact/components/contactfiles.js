import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'

const ContactFiles = ({ inputName, setFormData, formData }) => {

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevData => ({
            ...prevData,
            file: file
        }))
    }
    const handleFileRemove = (e) => {
        setFormData(prevData => ({
            ...prevData,
            file: null
        }))
    }
    return (
        <>
            <div className='w-full h-fit mt-3'>
                <h4 className='h-[50px] text-2xl'>Upload Files <span>(if any)</span></h4>
                <div className='w-full lg:h-[50px] h-fit border-[2px] border-zinc-950  flex lg:flex-row flex-col items-center justify-between lg:pr-4 pr-0 lg:gap-5 gap-0'>
                    <input
                        type='file'
                        name={inputName}
                        id={inputName}
                        className='hidden'
                        onChange={e => handleFileChange(e)}
                    />
                    <label htmlFor={inputName} className="cursor-pointer shrink-0 bg-white text-black lg:h-full h-[50px] lg:w-1/2 w-full grid place-items-center">
                        {formData.file === null ? 'Choose File' : 'Choose another file'}
                    </label>
                    <p className='text-xs w-full flex items-center justify-center h-[50px] px-3 lg:px-0'>
                        {formData.file === null ? 'No file Uploaded' : formData.file.name}
                        {formData.file && <span className='text-xl border-[1px] rounded-full ml-auto' onClick={handleFileRemove}><IoIosClose /></span>}
                    </p>
                </div>
            </div>

        </>
    )
}

export default ContactFiles