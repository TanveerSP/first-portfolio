import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Button from './Button';

// Linkes
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Mobile = ({ isOpen, setIsOpen }) => {

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { id: 1, links: 'home' },
        { id: 2, links: 'skills' },
        { id: 3, links: 'projects' },
        { id: 4, links: 'contact' },
    ]

    const socialLinks = [

        {
            id: 1,
            child: (<>
                <FaLinkedinIn className='text-[#ade3fd]' size={30} />
            </>),
            href: 'https://www.linkedin.com/in/tanveer-pathan/',
        },
        {
            id: 2,
            child: (<>
                <FaGithub size={30} className='text-[#c199ff]' />
            </>),
            href: 'https://github.com/TanveerSP',
        },
        {
            id: 3,
            child: (<>
                <IoIosMail size={30} className='text-[#e698c3]' />
            </>),
            href: 'mailto:tspathan012@gmail.com',
        },
    ]

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/TanveerResume.docx'; // Assuming the resume is in the public directory
        link.download = 'MyResume.pdf'; // This sets the filename for the downloaded file
        link.click();
    };

    return (
        <>
            <div className='cursor-pointer z-1 text-richblack-5'
                onClick={handleClick}
            >
                {!isOpen ? <HiBars3 size={30} /> : <RxCross2 size={30} />}
            </div>

            {/* Linkes */}
            <div
                className={`fixed top-16 left-0 ${isOpen ? "w-[30vh] bg-richblack-800" : "w-0"
                    } h-screen "bg-richblack-800" : "bg-[#000c23]" border-r-[1px] border-richblack-500
                     z-[100] flex justify-start items-center transition-all duration-[1s] flex-col overflow-hidden`}
            >
                <div className='flex flex-col justify-between gap-8 mt-10'>
                    <ul className='text-center gap-8 mt-5'>
                        {links.map(link => (
                            <li key={link.id}
                                className='px-4 py-4 cursor-pointer capitalize text-richblack-200 text-xl font-normal hover:scale-105 duration-200 first-letter hover:text-transparent bg-clip-text bg-gradient-to-r from-[#ade3fd] via-[#c199ff] to-[#e698c3]'>
                                <a href={`#${link.links}`}>{link.links}</a>
                            </li>
                        ))}
                    </ul>


                    {/* Resume button */}
                    <button
                        onClick={handleDownload}
                        className='relative w-[140px] text-center items-center rounded-lg py-3 px-4 text-richblack-900 font-semibold
                       bg-gradient-to-r from-[#ade3fd] via-[#c199ff] to-[#e698c3] hover:scale-105 duration-200'
                    >
                        <span className='mx-auto'>
                            Hire Me
                        </span>
                    </button>
                </div>

                <div className=' mt-4  py-4 px-4'>
                    <ul className='flex gap-4'>
                        {socialLinks.map(({ id, child, href, download }) => (
                            <li
                                key={id}
                                className={`mb-4 gap-2 hover:scale-105 duration-200 `}
                            >
                                <a
                                    href={href}
                                    className="flex justify-between items-center w-full text-white"
                                    download={download}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {child}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Mobile