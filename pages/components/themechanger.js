import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className='ml-auto h-full aspect-square rounded-full bg-light-secondary dark:bg-dark-secondary text-light-secondary dark:text-dark-secondary mr-5 '>
            <button
            className='w-full h-full flex items-center justify-center'
            onClick={toggleTheme}>
                {theme === 'dark' ? <CiLight /> : <MdDarkMode />}
            </button>
        </div>
    );
};

export default ThemeChanger;
