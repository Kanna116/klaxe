import { useState } from 'react';

const SocialIcon = ({ icon }) => {

    console.log(icon)
    const [transformStyle, setTransformStyle] = useState({});
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
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
        <div
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            className="w-fit h-fit p-4 icon-container flex items-center justify-center">
            <span
                style={transformStyle}
                className="text-xl icon  duration-75 ease-linear">
                    {icon}
            </span>
        </div>
    )
}

export default SocialIcon