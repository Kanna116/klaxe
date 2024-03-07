export const navitems = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Projects',
        link: '/projects',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
]

export const heroText = [
    "Hello, I am Murali Krishna Sake  ( Klaxe ). And I",
    "Navigate The Intersection of",
    "Design & Functionality",
    "Code with precision design with passion"
]

export const simpleAbout = {
    text: `I'm Murali Krishna Sake, a self-taught UX designer and front-end developer. I specialize in solving everyday problems through innovative and modern design trends. My approach involves empowering today's digital experiences with cross-functional development, ensuring a seamless user journey and elevating brand value. From ideation to deployment, I take pride in bringing creativity and functionality together. Explore my portfolio to witness how I transform ideas into impactful designs.`,
    link: '/about'
}
import { FaCodepen, FaGithub, FaGlobeAmericas, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialIcons = [
    {
        icon: <FaLinkedinIn />,
        socialHandleName: `LinkedIn`,
        link: 'https://www.linkedin.com/in/murali-krishna-sake/'
    },
    {
        icon: <FaGithub />,
        socialHandleName: `GitHub`,
        link: 'https://github.com/Kanna116'
    },
    {
        icon: <FaGlobeAmericas />,
        socialHandleName: `Design Portfolio`,
        link: 'https://muralikanna77.wixsite.com/designerkanna'
    },
    {
        icon: <FaXTwitter />,
        socialHandleName: `Twitter`,
        link: 'https://twitter.com/klax_e'
    },
    {
        icon: <FaCodepen />,
        socialHandleName: `Codepen`,
        link: 'https://codepen.io/Klax'
    }
]

import { FaCss3Alt, FaGitAlt, FaHtml5, FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { IoLogoFigma, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiAdobexd, SiNextdotjs, SiTailwindcss } from "react-icons/si";
export const techStackIcons = [
    {
        icon: <FaHtml5 />,
        title: 'HTML'
    },
    {
        icon: <FaCss3Alt />,
        title: 'CSS'
    },
    {
        icon: <IoLogoJavascript />,
        title: 'JavaScript'
    },
    {
        icon: <IoLogoReact />,
        title: 'React'
    },
    {
        icon: <SiNextdotjs />,
        title: 'Next js'
    },
    {
        icon: <SiTailwindcss />,
        title: 'Tailwind CSS'
    },
    {
        icon: <IoLogoFigma />,
        title: 'Figma'
    },
    {
        icon: <SiAdobexd />,
        title: 'Adobe XD'
    },
    {
        icon: <FaJava />,
        title: 'Java'
    },
    {
        icon: <FaDatabase />,
        title: 'Oracle SQl'
    },
    {
        icon: <FaGitAlt />,
        title: 'Git'
    },
    {
        icon: <FaGithub />,
        title: 'GitHub'
    },
]






//about
export const heroAbout = {
    desc: [`Hey, I am Murali Krishna. I am Frontend Developer and UX Designer.  I specialize in making modern designs with functional interfaces. My goals are always towards great User Experience while enhancing the brand power.`,
        `I am Mechanical Engineering Graduate but my strength in designing and developing made me revise my goals and choose the best path for me.`
    ],
    link: '/about'
}

export const whatIDoChips = [
    {
        id: 1,
        title: `Web development`,
        desc: `Transforming great UI's into code from the past year. With immense concentration and pixel perfection weaved into every product.
        Transforming modern designs into actual working projects through mastery in code`,
        isOpen: true,
    },
    {
        id: 2,
        title: `UX design`,
        desc: `Transforming great UI's into code from the past year. With immense concentration and pixel perfection weaved into every product.
        Transforming modern designs into actual working projects through mastery in code`,
        isOpen: false,
    },
    {
        id: 3,
        title: `Full Stack Web development`,
        desc: `I am currently undergoing a training for this. Thus far I completed core java, JDBC, hibernates with JPA, and frontend I can do in various languages`,
        isOpen: false,
    }
]

export const myPics = [
    {
        id: 1,
        image: '/images/about/mypics/photo-1.webp',
    },
    {
        id: 2,
        image: '/images/about/mypics/photo-2.webp',
    },
    {
        id: 3,
        image: '/images/about/mypics/photo-3.webp',
    },
    {
        id: 4,
        image: '/images/about/mypics/photo-4.webp',
    },
    {
        id: 5,
        image: '/images/about/mypics/photo-5.webp',
    },
    {
        id: 6,
        image: '/images/about/mypics/photo-6.webp',
    },
]



const index = () => <></>

export default index