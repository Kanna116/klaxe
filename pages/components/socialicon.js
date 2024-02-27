import { useState } from 'react';

const SocialIcon = ({ item }) => {

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
            <a
                style={transformStyle}
                href={item.link}
                target='_blank'
                className='w-fit h-fit duration-75 ease-linear cursor-pointer'>
                <span
                    className="text-xl">
                    {item.icon}
                </span>
            </a>
        </div>
    )
}

export default SocialIcon