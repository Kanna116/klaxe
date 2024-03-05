import { FiArrowUpRight } from 'react-icons/fi';
import { PiStarFourFill } from "react-icons/pi";
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ContactHero from './components/contacthero';
import ContactInput from './components/contactinput';
import ContactMessage from './components/contactmessage';
import ContactFiles from './components/contactfiles';
import { useState } from 'react';

const Contact = () => {
    const [formData, setformData] = useState({
        name: '',
        phone: '',
        mail: '',
        message: '',
        file: null

    });


    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full mt-[60px]'>
            <Navbar />
            <ContactHero />
            <div className='w-full h-fit flex items-start justify-between min-h-screen pb-10'>
                <form
                    onSubmit={e => e.preventDefault()}
                    className='w-1/2 h-full flex flex-col items-start justify-start'
                >
                    <ContactInput inputName='name' />
                    <ContactInput inputName='mail' />
                    <ContactInput inputName='phone' />
                    <ContactMessage inputName='message' />
                    <ContactFiles inputName='files' />

                    <button
                        type='submit'
                        className='bg-white text-black w-fit flex px-[100px] py-[20px]  items-center justify-center gap-5 text-2xl font-semibold mt-10'>
                        Submit <span className='text-xl'><FiArrowUpRight /></span>
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