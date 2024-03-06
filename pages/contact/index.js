import { FiArrowUpRight } from 'react-icons/fi';
import { PiStarFourFill } from "react-icons/pi";
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ContactHero from './components/contacthero';
import ContactInput from './components/contactinput';
import ContactMessage from './components/contactmessage';
import ContactFiles from './components/contactfiles';
import { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        mail: '',
        message: '',
        file: null
    });
    const [submitted, setSubmitted] = useState(false);




    


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        setSubmitted(true)

        // try {
        //     const response = await fetch('https://formspree.io/f/mayrbyew', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     if (response.ok) {
        //         setSubmitted(true);
        //         console.log('Form submitted successfully');
        //     } else {
        //         console.error('Failed to submit form');
        //     }
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        // }
    };

    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full mt-[60px]'>
            <Navbar />
            <ContactHero />
            <div className='w-full h-fit flex items-start justify-between min-h-screen pb-10'>
                <form
                    onSubmit={e => handleSubmit(e)}
                    className='w-1/2 h-full flex flex-col items-start justify-start'
                >
                    <ContactInput inputName='name' formData={formData} setFormData={setFormData} />
                    <ContactInput inputName='mail' formData={formData} setFormData={setFormData} />
                    <ContactInput inputName='phone' formData={formData} setFormData={setFormData} />
                    <ContactMessage inputName='message' formData={formData} setFormData={setFormData} />
                    <ContactFiles inputName='files' formData={formData} setFormData={setFormData} />

                    <button
                        type='submit'
                        className='bg-white text-black w-fit flex px-[100px] py-[20px]  items-center justify-center gap-5 text-2xl font-semibold mt-10'>
                        Send <span className='text-xl'><FiArrowUpRight /></span>
                    </button>

                    {submitted && <p className='text-primary text-xl font-light  mt-10 flex gap-5 items-center text-green-500'><span className='border-[1px] font-semibold p-2 rounded-full bg-green-400 text-black'><IoMdCheckmark /></span> Thank you for sending the details. I will connect with you ASAP</p>}

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