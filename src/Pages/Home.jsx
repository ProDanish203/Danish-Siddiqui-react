import React from 'react'
import { me2 } from "../Assets";

export const Home = () => {
  return (
    <>
    <section id='home' className='md:py-32 py-24 w-screen md:px-20 px-7'>
      
      <div className="w-full relative flex mt-10 xl:flex-row flex-col gap-10 items-center justify-center">

        <div className="content xl:flex-1">
          <p className="text-gray-300 md:text-lg text-md mb-1" data-aos="fade-right" data-aos-delay="200" data-aos-duration="300">Hello, I'm</p>
          <div className="name relative flex" data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
          <h1 className='md:text-7xl text-5xl font-bold text-contrast' >DANISH</h1> 
          <span className='text-[20px] text-white font-bold name-text absolute'>SIDDIQUI</span>
          </div>

          <p className='text-white mt-5 text-md' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
          As a Senior <span className='text-contrast'>Full-Stack Developer</span>, I excel in the MERN stack and possess expertise in React, Node.js, and other web technologies. I am dedicated to crafting cutting-edge web solutions that seamlessly merge backend functionality with visually striking frontend designs.
          </p>

          <button className='bg-contrast text-white font-bold p-3 rounded-md mt-4 text-lg'>Download CV</button>

        </div>

        <div className="xl:flex-1 md:h-[500px] h-[400px] rounded-md">
          <img src={me2} alt="" className='w-full object-contain h-full rounded-md'/>
        </div>

      </div>

    </section>
    </>
  )
}
