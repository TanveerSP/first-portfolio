import { FaGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export const skills = [
    {
        category: 'Front-end',
        items: [
            { name: 'HTML', icon: <FaHtml5 size={30} /> },
            { name: 'CSS', icon: <FaCss3 size={30} /> },
            { name: 'JS', icon: <IoLogoJavascript size={30} /> },
            { name: 'React.js', icon: <FaReact size={30} /> },
            { name: 'Tailwind', icon: <SiTailwindcss size={30} /> },
            { name: 'BootStrap', icon: <FaBootstrap size={30} /> },
        ],
    },
    {
        category: 'Back-end',
        items: [
            { name: 'Node.js', icon: <FaNodeJs size={30} /> },
            { name: 'Express', icon: <SiExpress size={30} /> },
            { name: 'MongoDB', icon: <SiMongodb size={30} /> },
            { name: 'SQL', icon: <SiMysql size={30} /> },
        ],
    },
    {
        category: 'Programing',
        items: [
            { name: 'Cpp', icon: <TbBrandCpp size={30} />  },
            { name: 'Python', icon: <FaPython size={30} /> },
            { name: 'Java', icon: <FaJava size={30} /> },
        ]
    },
    {
        category: 'Tools',
        items: [
            { name: 'GitHub', icon: <FaGithub size={30} /> },
            { name: 'Git', icon: <FaGitAlt size={30} /> },
            { name: 'Postman', icon: <SiPostman size={30} /> },
        ],
    },
];