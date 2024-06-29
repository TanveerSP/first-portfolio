import { useEffect } from 'react'
import Headline from '../components/comman/Headline'
import HeroSection from '../components/Home/HeroSection'
import Skills from '../components/Home/Skills'
import Projects from '../components/Home/Projects'
import Contact from '../components/Home/Contact'

import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });  // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className='mt-14'>

      <div className=' relative flex flex-col mx-auto w-11/12 max-w-maxContent items-center text-white justify-between '>
        {/* Headline */}
        <section id='home'>
          <div className='py-2'>
            <Headline
              headText={" my portfolio"} text={"Hi, my name is Tanveer"} />
          </div>
          <div className='w-11/12 '>
            <HeroSection />
          </div>
        </section>

        {/* Skills Section */}
        <div className='py-2 mt-10' id='skills'>
          <Headline
            headText={"skills"} text={"my skills"} />
        </div>
        <div data-aos="fade-up" className='w-11/12 border-[1px] border-richblack-700 rounded-xl '>
          <Skills />
        </div>


        {/* Project section */}
        <div className='py-20 mt-20' id='projects'>
          <Headline headText={"my works"} text={"projects"} />
        </div>
        <div data-aos="fade-right" className='w-11/12'>
          <Projects />
        </div>

        {/* Contact page */}
        <section className='' id='contact'>
          <div className='py-20 mt-10'>
            <Headline headText={"Get in touch"} text={"contact me"} />
          </div>
          <div data-aos="fade-left" className='w-11/12 border-[1px] border-richblack-700 py-2 px-2 rounded-xl'>
            <Contact />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home