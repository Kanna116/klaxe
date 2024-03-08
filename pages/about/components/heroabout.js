import { heroAbout } from '@/pages/constants'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

const HeroAbout = () => {
    return (
        <div className='w-full h-fit py-16 mt-[60px] flex flex-col lg:flex-row md:flex-row lg:items-center items-center lg:justify-between md:justify-between justify-start gap-5 lg:gap-20 md:gap-20'>
            <div className='lg:w-[30vw] md:w-[30vw] w-full lg:aspect-square md:aspect-square aspect-video lg:rounded-full md:rounded-full rounded-special overflow-hidden shrink-0'>
                <Image
                    src={"/images/about/hero-about-image.webp"}
                    width={1000}
                    height={1000}
                    priority
                    alt='image of Murali Krishna Sake'
                    className='w-full h-full lg:object-center md:object-center object-[center_40%] object-cover'
                />
            </div>

            <div className='lg:w-1/2 md:w-1/2 w-full h-full  flex flex-col items-start justify-between gap-5'>
                <h1 className='text-3xl font-bold'>About Me</h1>
                {
                    heroAbout.desc.map((item, index) => <p key={index} className='w-full lg:text-2xl md:text-xl text-base font-normal'>{item}</p>)
                }
                <a href={heroAbout.link}>
                    <button className='lg:px-[30px] px-[20px] lg:py-[10px] py-[10px] rounded-[3px] bg-light-secondary dark:bg-dark-secondary text-light-secondary dark:text-dark-secondary font-semibold text-xs lg:text-xl mt-5 flex gap-2 items-center'>
                        Support <span className='text-2xl'><FiArrowUpRight /></span>
                    </button>
                </a>
            </div>

        </div>
    )
}

export default HeroAbout