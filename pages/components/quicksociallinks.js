import { Children } from "react";
import { FaCodepen, FaGithub, FaGlobeAmericas, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const QuickSocialLinks = () => {

    return (
        <div className="quick-social-icons absolute left-0 bottom-10 h-fit w-fit lg:flex flex-col hidden">
            <div
                onMouseMove={(dets) => {

                }}
                className="w-fit h-fit p-4 icon-container bg-zinc-500">
                <span
                    className="text-2xl icon"><FaLinkedinIn /></span>
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