import { BsMouseFill } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi2";
import { heroText } from '../constants';

import Link from "next/link";
import { useState } from "react";
import HeroBackground from "./herobackground";
import QuickSocialLinks from "./quicksociallinks";

const HeroSection = () => {
    const [interactiveValues, setInteractiveValues] = useState({
        rotateValue: 0,
        scaleYValue: 1,
    });

    const handleMouseMove = (e) => {

        let rotateFromMouseMove = -(window.innerWidth / 2 - e.clientX) / 20;
        let scaleYfromMouseMove = 1 - ((window.innerHeight / 2 - e.clientY) / 20) / 30;

        setInteractiveValues(prevValues => ({
            ...prevValues,
            rotateValue: rotateFromMouseMove,
            scaleYValue: scaleYfromMouseMove
        }))
    }


    return (
        <div
            onMouseMove={handleMouseMove}
            className='w-full h-screen relative'>
            <div className="front w-full h-full pt-[60px] flex flex-col items-center justify-center lg:gap-6 gap-2">
                <h4 className='font-light text-primary text-xs lg:text-3xl'>{heroText[0]}</h4>
                <h1 className='lg:text-6xl md:text-4xl text-primary text-xl font-medium capitalize'>{heroText[1]}</h1>
                <h1 className='lg:text-5xl md:text-3xl text-primary text-xl font-medium capitalize'>{heroText[2]}</h1>
                <h4 className='font-light text-primary text-xs lg:text-xl'>{heroText[3]}</h4>
                <Link href={`/contact`} className="w-fit h-fit">
                    <button className='lg:px-[30px] px-[20px] lg:py-[10px] py-[10px] rounded-[3px] bg-secondary text-secondary font-semibold text-xs lg:text-xl mt-5'>Connect</button>
                </Link>

                {/* scroll down suggestion */}
                <div className="scroll-down absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-3 text-primary">
                    <span className="text-2xl rotate-180"><BsMouseFill /></span>
                    <span className="text-2xl arrow scrolldownarrow"><HiArrowDown /></span>
                </div>

                {/* Quick social icons */}
                <QuickSocialLinks />


            </div>
            <HeroBackground interactiveValues={interactiveValues} />
        </div>
    )
}

export default HeroSection