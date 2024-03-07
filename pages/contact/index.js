import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoMdCheckmark } from 'react-icons/io';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ContactFiles from './components/contactfiles';
import ContactHero from './components/contacthero';
import ContactInput from './components/contactinput';
import ContactMessage from './components/contactmessage';
import OtherSocialOptions from './components/othersocialoptions';
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

        try {
            const response = await fetch('https://formspree.io/f/mayrbyew', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                console.log('Form submitted successfully');
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full mt-[60px]'>
            <Navbar />
            <ContactHero />
            <div className='w-full h-fit flex lg:flex-row flex-col-reverse items-start justify-between min-h-screen lg:pb-20 pb-10 '>
                <form
                    onSubmit={e => handleSubmit(e)}
                    className='lg:w-1/2 w-full h-full flex flex-col items-start justify-start lg:mt-0 mt-5'
                >
                    <ContactInput inputName='name' formData={formData} setFormData={setFormData} />
                    <ContactInput inputName='mail' formData={formData} setFormData={setFormData} />
                    <ContactInput inputName='phone' formData={formData} setFormData={setFormData} />
                    <ContactMessage inputName='message' formData={formData} setFormData={setFormData} />
                    <ContactFiles inputName='files' formData={formData} setFormData={setFormData} />

                    <button
                        type='submit'
                        className='bg-white text-black w-fit flex lg:px-[100px] px-[50px] lg:py-[20px] py-[10px]  items-center mx-auto lg:mx-0 justify-center gap-5 lg:text-2xl text-xl font-semibold mt-10'>
                        Send <span className='text-xl'><FiArrowUpRight /></span>
                    </button>

                    {
                        submitted && <p className='text-primary lg:text-xl text-sm font-light  mt-10 flex gap-5 items-center text-green-500'><span className='border-[1px] font-semibold p-2 rounded-full bg-green-400 text-black'><IoMdCheckmark /></span> Thank you for sending the details. I will connect with you ASAP</p>
                    }

                </form>


                <div className='lg:w-1/3  w-full h-fit '>
                    <div className='border-[1px] capitalize lg:mt-5 mt-2 lg:px-5 px-2 lg:py-10 py-5 text-center lg:text-start'>
                        <h1 className='lg:text-4xl text-xl font-light'>I would love to hear what you have in mind</h1>
                        <h1 className='lg:text-4xl text-xl font-light lg:mt-10 mt-3'>Let us not wast a minute</h1>
                    </div>

                    <div className='lg:block md:hidden hidden'>
                        <OtherSocialOptions />
                    </div>
                </div>
            </div>
            <div className='lg:hidden md:block block pb-20'>
                <OtherSocialOptions />
            </div>

            <Footer />
        </div>
    )
}

export default Contact