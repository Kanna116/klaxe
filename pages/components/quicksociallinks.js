import { useState } from "react";
import { FaCodepen, FaGithub, FaGlobeAmericas, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const QuickSocialLinks = () => {

    const [transformStyle, setTransformStyle] = useState({});
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // const translateX = x - rect.width / 2;
        // const translateY = y - rect.height / 2;

        const translateX = Math.min(x - rect.width / 2, 20); 
        const translateY = Math.min(y - rect.height / 2, 20);

        const transform = `translate(${translateX}px, ${translateY}px)`;
        setTransformStyle({ transform });
    }

    const handleMouseLeave = () => {
        const transform = `translate(0px, 0px)`;
        setTransformStyle({ transform });
    }

    return (
        <div className="quick-social-icons absolute left-0 bottom-10 h-fit w-fit lg:flex md:flex flex-col hidden">
            <div
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={handleMouseLeave}
                className="w-fit h-fit p-4 icon-container bg-zinc-500 flex items-center justify-center">
                <span
                    style={transformStyle}
                    className="text-2xl icon pointer-events-none">
                    <FaLinkedinIn />
                </span>
            </div>

            
            <div className="w-fit h-fit p-1 ">
                <span className="text-2xl"><FaGithub /></span>
            </div>
            <div className="w-fit h-fit p-1 ">
                <span className="text-2xl"><FaGlobeAmericas /></span>
            </div>
            <div className="w-fit h-fit p-1 ">
                <span className="text-2xl"><FaXTwitter /></span>
            </div>
            <div className="w-fit h-fit p-1 ">
                <span className="text-2xl"><FaCodepen /></span>
            </div>
        </div>
    )
}

export default QuickSocialLinks