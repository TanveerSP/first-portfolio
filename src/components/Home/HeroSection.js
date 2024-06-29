import React, { useEffect } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import myimage from '../../assets/myImage.jpg';
// animation
import Aos from 'aos';
import "aos/dist/aos.css"

const HeroSection = () => {

    useEffect(() => {
        Aos.init({
            duration: 1100,
            delay: 250,
            once: true,
        })
    })

    return (
        <section className="flex flex-col mx-auto md:flex-row ">
            <div data-aos="fade-right" className='flex flex-col justify-center'>
                <h1
                    className='text-white text-4xl sm:text-7xl  font-[900] '>
                    I am a MERN Stack Developer
                </h1>
                <p className='text-gray-400 py-4 max-w-md'>
                    I am Passionate and proficient MERN stack developer.
                    Currently, I Love to work on web application using
                    technologies like
                    React.js, Express , Node.js, Tailwind, and Bootstrap.
                    Demonstrates mastery in JavaScript.
                    back-end functionality, effective problem-solving
                </p>
                <div className='mb-3'>
                    <button
                        className='group text-richblack-900 text-gray-900 w-fit px-6 py-3 my-2 flex items-center
                         rounded-md bg-gradient-to-r from-[#ade3fd] via-[#c199ff] 
                          to-[#e698c3] cursor-pointer '>
                        <a href="#projects">Portfolio</a>
                        <span className=' group-hover:rotate-90 duration-300 '>
                            <MdKeyboardArrowRight className=' ml-1 text-2xl text-richblack-800' />
                        </span>
                    </button>
                </div>
            </div>

            <div data-aos="fade-left">
                <img src={myimage} alt="my profile"
                    className=' rounded-2xl mx-auto w-2/3 mc:w-full '
                />
            </div>

        </section>
    )
}

export default HeroSection