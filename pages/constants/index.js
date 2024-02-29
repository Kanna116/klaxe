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
        link: '',
    },
    {
        name: 'Contact',
        link: '',
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
        link: 'https://www.linkedin.com/in/murali-krishna-sake/'
    },
    {
        icon: <FaGithub />,
        link: 'https://github.com/Kanna116'
    },
    {
        icon: <FaGlobeAmericas />,
        link: 'https://muralikanna77.wixsite.com/designerkanna'
    },
    {
        icon: <FaXTwitter />,
        link: 'https://twitter.com/klax_e'
    },
    {
        icon: <FaCodepen />,
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


export const handpickedProjects = [
    {
        title: 'Klick It',
        link: '',
        image: '/images/handpicked-projects/Project-1.png',
    },
    {
        title: 'Velvet Vista',
        link: '',
        image: '/images/handpicked-projects/Project-2.png',
    },
    {
        title: 'Zinav',
        link: '',
        image: '/images/handpicked-projects/Project-3.png',
    },
    {
        title: 'Mira',
        link: '',
        image: '/images/handpicked-projects/Project-4.png',
    },
    {
        title: 'COCO Coffee',
        link: '',
        image: '/images/handpicked-projects/Project-5.png',
    },
]


//about
export const heroAbout = {
    desc: [`Hey, I am Murali Krishna. I am Frontend Developer and UX Designer.  I specialize in making modern designs with functional interfaces. My goals are always towards great User Experience while enhancing the brand power.`,
        `I am Mechanical Engineering Graduate but my strength in designing and developing made me revise my goals and choose the best path for me.`
    ],
    link: ''
}

export const whatIDoChips = [
    {
        title:`Web development`,
        desc:`Transforming great UI’s into code from the past year. With immense concentration and pixel perfection weaved into every product.
        Transforming modern designs into actual working projects through mastery in code`,
        isOpen: false,
    },
    {
        title:`UX design`,
        desc:`Transforming great UI’s into code from the past year. With immense concentration and pixel perfection weaved into every product.
        Transforming modern designs into actual working projects through mastery in code`,
        isOpen: false,
    },
    {
        title:`Full Stack Web development`,
        desc:`I am currently undergoing a training for this. Thus far I completed core java, JDBC, hibernates with JPA, and frontend I can do in various languages`,
        isOpen: false,
    }
]

const index = () => <></>

export default index