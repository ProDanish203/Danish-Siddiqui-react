import React from 'react'
import { me } from "../Assets";

export const About = () => {
  return (
    <section id='about' className='w-screen md:mb-20 mb-10 md:px-20 px-7'>

  <div className='lg:pt-20 xs:pt-5 pt-20'>

      <div className="w-full relative flex xl:flex-row flex-col-reverse gap-10 items-center justify-center">

      <div className="xl:flex-1 relative">
          <img src={me} alt="" className='about-img shadow-2xl sm:object-cover object-contain rounded-[10px] relative w-full sm:h-[600px] h-[200px]' />
      </div>

        <div className="xl:flex-1 md:mr-10">

          <h2 className='text-3xl text-white font-semibold'>About Me</h2>

          <p className='text-white mt-5 text-[17px]' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
            I am a senior <span className="text-contrast">Front-End Web Developer</span>. I am an experienced web developer, i've developed a number of apps and interactive web pages 
             I have good commands on the new and advanced technologied such as <span className="text-contrast">HTML 5, CSS 3, JS</span> and front-end frame works such as  <span className='text-contrast'>react</span>.
          </p>

          <div className="sub-heading text-contrast font-semibold text-xl my-3 mt-5">Socials:</div>

          <div className="social-cards mt-5 flex items-center flex-wrap md:gap-4 gap-2">
            
            <i 
            className="fab fa-github text-white md:text-2xl text-xl card w-12 text-center p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="800"
            >
            </i>

            <i 
            className="fab fa-linkedin text-white w-12 text-center md:text-2xl text-xl card p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="800"
            >
            </i>

            <i 
            className="fab fa-facebook-f text-white w-12 text-center md:text-2xl text-xl card p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
            >
            </i>

            <i 
            className="fab fa-instagram text-white w-12 text-center md:text-2xl text-xl card p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="550"
            data-aos-duration="800"
            >
            </i>

            <i 
            className="fab fa-twitter text-white w-12 text-center md:text-2xl text-xl card p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="700"
            data-aos-duration="800"
            >
            </i>

          </div>

        </div>

        

      </div>
    </div>
    </section>
  )
}
