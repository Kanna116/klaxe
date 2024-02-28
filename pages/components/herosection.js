import { BsMouseFill } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi2";
import { heroText } from '../constants';

import QuickSocialLinks from "./quicksociallinks";

const HeroSection = () => {


    return (
        <div className='w-full h-screen relative'>
            <div className="front w-full h-full pt-[60px] flex flex-col items-center justify-center lg:gap-6 gap-2">
                <h4 className='font-semibold text-[#ffffff] text-xs lg:text-3xl'>{heroText[0]}</h4>
                <h1 className='lg:text-6xl md:text-4xl text-white text-2xl font-bold capitalize'>{heroText[1]}</h1>
                <h1 className='lg:text-5xl md:text-3xl text-white text-2xl font-semibold capitalize'>{heroText[2]}</h1>
                <h4 className='font-semibold text-[#ffffff] text-xs lg:text-xl'>{heroText[3]}</h4>
                <button className='lg:px-[30px] px-[20px] lg:py-[10px] py-[10px] rounded-[3px] bg-white text-black font-semibold text-xs lg:text-xl mt-5'>Connect</button>
            
            {/* scroll down suggestion */}
            <div className="scroll-down absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-3">
                <span className="text-2xl rotate-180"><BsMouseFill /></span>
                <span className="text-2xl arrow scrolldownarrow"><HiArrowDown /></span>
            </div>
            
            {/* Quick social icons */}
            <QuickSocialLinks />


            </div>
            <div className="back absolute top-0 left-1/2 -translate-x-1/2 h-screen w-screen -z-[1] overflow-hidden brightness-50">
                <video
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover'
                    src="/videos/hero-background-video1.webm">
                </video>
            </div>
        </div>
    )
}

export default HeroSection