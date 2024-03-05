import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'

const ContactFiles = ({ inputName, handleFileChange, handleFileRemove, formData }) => {
    return (
        <>
            <div className='w-full h-fit mt-3'>
                <h4 className='h-[50px] text-2xl'>Upload Files <span>(if any)</span></h4>
                <div className='w-full h-[50px] border-[1px] border-zinc-950  flex items-center justify-between pr-4 gap-5'>
                    <input
                        type='file'
                        name={inputName}
                        id={inputName}
                        className='hidden'
                        onChange={e => handleFileChange(e)}
                    />
                    <label htmlFor={inputName} className="cursor-pointer shrink-0 bg-white text-black h-full w-1/2 grid place-items-center">
                        {formData.file === null ? 'Choose File' : 'Choose another file'}
                    </label>
                    <p className='text-xs w-full flex items-center justify-between'>
                        {formData.file === null ? 'No file Uploaded' : formData.file.name}
                        {formData.file && <span className='text-xl border-[1px] rounded-full' onClick={handleFileRemove}><IoIosClose /></span>}
                    </p>
                </div>
            </div>

        </>
    )
}

export default ContactFiles