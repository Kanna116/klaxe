import React from 'react'

const ContactFiles = ({ inputName }) => {
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
                    />
                    <label htmlFor={inputName} className="cursor-pointer shrink-0 bg-white text-black h-full w-1/2 grid place-items-center">
                        Choose File
                    </label>
                    <p className='text-xs w-full'>No file Uploaded</p>
                </div>
            </div>

        </>
    )
}

export default ContactFiles