import React from 'react'
import Navbar from '../components/navbar'
import ContactHero from './components/contacthero'
import { PiStarFourFill } from "react-icons/pi";
import { FiArrowUpRight } from 'react-icons/fi';
import Footer from '../components/footer';

const Contact = () => {
    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full mt-[60px]'>
            <Navbar />
            <ContactHero />
            <div className='w-full h-fit flex items-start justify-between min-h-screen'>
                <form
                    onSubmit={e => e.preventDefault()}
                    className='w-1/2 h-full flex flex-col items-start justify-start [&>*]:w-full'
                >
                    <label
                        htmlFor="name"
                        className='flex items-center gap-2'>
                        Name <sup><PiStarFourFill /></sup>
                    </label>
                    <input
                        id='name'
                        type="text"
                        required
                        className='text-black'
                    />

                    <label
                        htmlFor="phone"
                        className='flex items-center gap-2'>
                        Phone <sup><PiStarFourFill /></sup>
                    </label>
                    <input
                        id='phone'
                        type="text"
                        required
                        className='text-black'
                    />

                    <label
                        htmlFor="mail"
                        className='flex items-center gap-2'>
                        Mail <sup><PiStarFourFill /></sup>
                    </label>
                    <input
                        id='mail'
                        type="text"
                        required
                        className='text-black'
                    />

                    <label
                        htmlFor="message"
                        className='flex items-center gap-2'>
                        Message <sup><PiStarFourFill /></sup>
                    </label>
                    <textarea
                        name="message"
                        id=""
                        cols="30" rows="10"
                        className='text-black resize-y max-h-[350px] min-h-[40px] h-[150px]'>
                    </textarea>
                    <h4>Upload Files <span>(if any)</span></h4>
                    <div className='border-[1px] border-zinc-950 h-[70px]  flex items-center justify-between pr-4 gap-5'>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            className='hidden'
                        />
                        <label htmlFor="file" className="cursor-pointer shrink-0 bg-white text-black h-full w-1/2 grid place-items-center">
                            Choose File
                        </label>
                        <p className='text-xs w-full'>No file Uploaded</p>
                    </div>
                    <button
                        type='submit'
                        className='flex items-center justify-center gap-3'>
                        Submit <span><FiArrowUpRight /></span>
                    </button>
                </form>
                <div className='w-1/4 h-fit capitalize'>
                    <h1 className='text-4xl font-light'>I would love to hear what you have in mind</h1>
                    <h1 className='text-4xl font-light mt-10'>Let us not wast a minute</h1>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact