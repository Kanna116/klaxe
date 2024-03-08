import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoIosClose, IoMdCheckmark } from 'react-icons/io';
import { PiStarFourFill } from 'react-icons/pi';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ContactHero from './components/contacthero';
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

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFileChange = (e) => {
        const addedfile = e.target.files[0];
        setFormData(prevData => ({
            ...prevData,
            file: addedfile
        }))
    }
    const handleFileRemove = (e) => {
        setFormData(prevData => ({
            ...prevData,
            file: null
        }))
    }


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
                    <div className='w-full h-fit mt-3'>
                        <label
                            htmlFor='name'
                            className='flex items-center gap-2 capitalize h-[50px] text-2xl'>
                            Name<sup><PiStarFourFill /></sup>
                        </label>
                        <input
                            id='name'
                            type="text"
                            required
                            name='name'
                            value={formData.name}
                            onChange={(e) => handleInputChange(e)}
                            className='text-black bg-light-primary dark:bg-dark-secondary h-[50px] w-full outline-0 px-5 border-[1px] rounded-special border-light-secondary dark:border-dark-secondary'
                        />
                    </div>
                    <div className='w-full h-fit mt-3'>
                        <label
                            htmlFor='mail'
                            className='flex items-center gap-2 capitalize h-[50px] text-2xl'>
                            Mail<sup><PiStarFourFill /></sup>
                        </label>
                        <input
                            id='mail'
                            type="text"
                            required
                            name='mail'
                            value={formData.mail}
                            onChange={(e) => handleInputChange(e)}
                            className='text-black bg-light-primary dark:bg-dark-secondary h-[50px] w-full rounded-special outline-0 px-5 border-[1px] border-light-secondary dark:border-dark-secondary'
                        />
                    </div>
                    <div className='w-full h-fit mt-3'>
                        <label
                            htmlFor='phone'
                            className='flex items-center gap-2 capitalize h-[50px] text-2xl'>
                            Phone<sup><PiStarFourFill /></sup>
                        </label>
                        <input
                            id='phone'
                            type="text"
                            required
                            name='phone'
                            value={formData.phone}
                            onChange={(e) => handleInputChange(e)}
                            className='text-black bg-light-primary dark:bg-dark-secondary h-[50px] w-full rounded-special outline-0 px-5 border-[1px] border-light-secondary dark:border-dark-secondary'
                        />
                    </div>

                    <div className='w-full h-fit mt-3'>
                        <label
                            htmlFor='message'
                            className='flex items-center gap-2 capitalize h-[50px] text-2xl'>
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            cols="30" rows="10"
                            onChange={(e) => handleInputChange(e)}
                            value={formData.message}
                            className='text-black bg-light-primary dark:bg-dark-secondary resize-y max-h-[350px] min-h-[40px] h-[150px] w-full p-5 outline-0 rounded-special border-[1px] border-light-secondary dark:border-dark-secondary'>
                        </textarea>
                    </div>


                    <div className='w-full h-fit mt-3'>
                        <h4 className='h-[50px] text-2xl'>Upload Files <span>(if any)</span></h4>
                        <div className='w-full lg:h-[50px] h-fit border-[1px] border-light-secondary dark:border-dark-secondary  flex lg:flex-row flex-col items-center justify-between lg:pr-4 pr-0 lg:gap-5 gap-0 rounded-special'>
                            <input
                                type='file'
                                name='file'
                                id='file'
                                className='hidden'
                                onChange={e => handleFileChange(e)}
                            />
                            <label htmlFor='file' className="cursor-pointer shrink-0 bg-light-secondary dark:bg-dark-secondary overflow-hidden text-light-secondary dark:text-dark-secondary lg:h-full h-[50px] lg:w-1/2 w-full grid place-items-center">
                                {formData.file === null ? 'Choose File' : 'Choose another file'}
                            </label>
                            <p className='text-xs w-full flex items-center justify-center h-[50px] px-3 lg:px-0'>
                                {formData.file === null ? 'No file Uploaded' : formData.file.name}
                                {formData.file !== null && <span className='text-xl border-[1px] border-light-secondary dark:border-dark-secondary rounded-full ml-auto' onClick={handleFileRemove}><IoIosClose /></span>}
                            </p>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='bg-light-secondary dark:bg-dark-secondary text-light-secondary dark:text-dark-secondary w-fit flex lg:px-[100px] px-[50px] lg:py-[20px] py-[10px]  items-center mx-auto lg:mx-0 justify-center gap-5 lg:text-2xl text-xl font-semibold mt-10'>
                        Send <span className='text-3xl'><FiArrowUpRight /></span>
                    </button>

                    {
                        submitted && <p className='text-primary lg:text-xl text-sm font-light  mt-10 flex gap-5 items-center text-green-500'><span className='border-[1px] font-semibold p-2 rounded-full bg-green-400 text-black'><IoMdCheckmark /></span> Thank you for sending the details. I will connect with you ASAP</p>
                    }

                </form>


                <div className='lg:w-1/3  w-full h-fit '>
                    <div className='border-[1px] border-light-secondary dark:border-dark-secondary rounded-special capitalize lg:mt-5 mt-2 lg:px-5 px-2 lg:py-10 py-5 text-center lg:text-start'>
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